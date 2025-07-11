'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import GoogleLoginButton from '../google_login/GoogleLogin';
import FacebookLoginButton from '../facebook_login/page';
import axios from 'axios';

export default function SignIn() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

    const [otpSent, setOtpSent] = useState(false);
    const [enteredOtp, setEnteredOtp] = useState('');
    const [error, setError] = useState('');

    const handleSendOtp = async () => {
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login/sendOtp', {
                email,
                password,
            });

            if (res.status === 200) {
                setError('');
                setOtpSent(true);
                alert(res.data.message || 'OTP sent successfully to your email');
            }
        } catch (err) {
            console.error('Error sending OTP:', err);
            const errorMsg = err.response?.data?.error || err.response?.data?.message || 'Failed to send OTP';
            alert(errorMsg);
            setError(errorMsg);
        }
    };
    
    
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            alert("Please fill all fields.");
            return;
        }

        await handleSendOtp();
    };

    const handleOtpSubmit = async () => {
        setError('');
        try {
            const res = await axios.post('http://localhost:5000/api/auth/otp/login', {
                email,
                otp: enteredOtp,
            });

            alert('OTP Verified. Login successful!');
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user', JSON.stringify(res.data.user));

            if (remember) {
                localStorage.setItem('rememberMe', email);
            } else {
                localStorage.removeItem('rememberMe');
            }

            router.push('/');
        } catch (err) {
            console.error(err);
            setError(err.response?.data?.error || 'Invalid OTP or login failed');
        }
    };

    return (
        <div className="min-h-screen bg-[#fdfcfc] flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
                <button
                    className="text-sm text-gray-500 hover:text-black mb-4 flex items-center"
                    onClick={() => router.push('/')}
                >
                    <span className="mr-1">←</span> Back To Home
                </button>

                <h2 className="text-3xl font-bold mb-1">Sign In</h2>
                <p className="text-sm text-gray-500 mb-6">
                    We'll send a confirmation code to your email.
                </p>

                {!otpSent ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-semibold mb-1">
                                Email <span className="text-red-500">*</span>
                            </label>
                            <input
                                name="email"
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="relative">
                            <label className="block text-sm font-semibold mb-1">
                                Password <span className="text-red-500">*</span>
                            </label>
                            <input
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 pr-10 focus:outline-none focus:ring-2 focus:ring-black"
                                placeholder="Enter your password"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-[38px] text-gray-500 hover:text-black"
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>

                        <div className="flex justify-between items-center text-sm mt-1">
                            <a href="#" className="text-red-500 hover:underline">
                                Forgot Password ?
                            </a>
                            <label className="flex items-center gap-2 text-gray-600">
                                <input
                                    type="checkbox"
                                    checked={remember}
                                    onChange={() => setRemember(!remember)}
                                />
                                Remember me
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-black text-white py-2 rounded-md font-semibold hover:bg-gray-900 transition"
                        >
                            Send OTP
                        </button>
                    </form>
                ) : (
                    <div className="space-y-4">
                        <p className="text-sm text-gray-600">
                            We've sent a 6-digit OTP to your email.
                        </p>
                        <input
                            type="text"
                            maxLength="6"
                            value={enteredOtp}
                            onChange={(e) => setEnteredOtp(e.target.value)}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black"
                            placeholder="Enter OTP"
                        />
                        {error && <p className="text-sm text-red-500">{error}</p>}
                        <button
                            onClick={handleOtpSubmit}
                            className="w-full bg-black text-white py-2 rounded-md font-semibold hover:bg-gray-900 transition"
                        >
                            Verify OTP
                        </button>
                    </div>
                )}

                {!otpSent && (
                    <>
                        <div className="my-6 text-center text-gray-400 text-sm">
                            Or, log in with your social account
                        </div>
                        <div className="space-y-3">
                            <GoogleLoginButton />
                            <FacebookLoginButton />
                        </div>
                        <p className="mt-6 text-center text-sm text-gray-600">
                            Don't have an account yet?{' '}
                            <a href="/signup" className="text-blue-600 font-medium hover:underline">
                                Register
                            </a>
                        </p>
                    </>
                )}
            </div>
        </div>
    );
}
