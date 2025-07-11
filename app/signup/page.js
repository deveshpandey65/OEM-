'use client';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import GoogleLoginButton from '../google_login/GoogleLogin';
// import FacebookLoginButton from '../facebook_login/page';
import axios from 'axios';

export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        password: '',
    });

    const [otpSent, setOtpSent] = useState(false);
    const [enteredOtp, setEnteredOtp] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { firstName, lastName, phone, email, password } = formData;

        if (!firstName || !lastName || !phone || !email || !password) {
            alert("Please fill all fields.");
            return;
        }

        try {
            await axios.post('http://localhost:5000/api/auth/sendOtp', {
                email,
            });
            setOtpSent(true);
            alert('OTP sent successfully to your email');
        } catch (error) {
            setOtpSent(false);
            console.error('❌ Failed to send OTP:', error.response?.data || error.message);
        }
    };

    const handleOtpSubmit = async () => {
        setError('');
        const { firstName, lastName, phone, email, password } = formData;

        try {
            const res = await axios.post('http://localhost:5000/api/auth/otp/signup', {
                email,
                password,
                otp: enteredOtp,
                firstName, 
                lastName,
                phone,
                role: 'CUSTOMER',
            });

            alert('OTP Verified. Signup successful!');
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user', JSON.stringify(res.data.user));
            router.push('/');
        } catch (err) {
            console.error(err);
            setError(err.response?.data?.error || 'Something went wrong');
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

                <h2 className="text-3xl font-bold mb-1">Sign Up</h2>
                <p className="text-sm text-gray-500 mb-6">
                    We'll send a confirmation code to your email.
                </p>

                {!otpSent ? (
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-semibold mb-1">First Name *</label>
                            <input
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                type="text"
                                required
                                className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black"
                                placeholder="Enter your first name"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-1">Last Name *</label>
                            <input
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                type="text"
                                required
                                className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black"
                                placeholder="Enter your last name"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-1">Phone No. *</label>
                            <input
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                type="text"
                                required
                                className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black"
                                placeholder="Enter your phone number"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-1">Email *</label>
                            <input
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                type="email"
                                required
                                className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="relative">
                            <label className="block text-sm font-semibold mb-1">Password *</label>
                            <input
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                type={showPassword ? 'text' : 'password'}
                                required
                                className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black pr-10"
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

                        <button
                            type="submit"
                            className="w-full bg-black text-white py-2 rounded-md font-semibold hover:bg-gray-900 transition"
                        >
                            Sign Up
                        </button>
                    </form>
                ) : (
                    <div className="space-y-4">
                        <p className="text-sm text-gray-600">
                            We’ve sent a 6-digit OTP to your email.
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
                            Or, sign up using your social account
                        </div>

                        <div className="space-y-3">
                            <GoogleLoginButton />
                            {/* <FacebookLoginButton /> */}
                        </div>

                        <p className="mt-6 text-center text-sm text-gray-600">
                            Already have an Account?{' '}
                            <a href="/signin" className="text-green-600 font-medium hover:underline">
                                Sign In
                            </a>
                        </p>
                    </>
                )}
            </div>
        </div>
    );
}
