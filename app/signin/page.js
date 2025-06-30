'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaEye, FaEyeSlash, FaGoogle, FaFacebook } from 'react-icons/fa';

export default function SignIn() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const saved = localStorage.getItem('signupData');
        if (!saved) {
            alert('No registered user found.');
            return;
        }

        const user = JSON.parse(saved);

        if (email === user.email && password === user.password) {
            alert('Login successful!');
            router.push('/dashboard'); // or any page
        } else {
            alert('Invalid credentials!');
        }
    };

    return (
        <div className="min-h-screen bg-[#fdfcfc] flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
                {/* Back to Home */}
                <button
                    className="text-sm text-gray-500 hover:text-black mb-4 flex items-center"
                    onClick={() => router.push('/')}
                >
                    <span className="mr-1">←</span> Back To Home
                </button>

                {/* Title */}
                <h2 className="text-3xl font-bold mb-1">Sign In</h2>
                <p className="text-sm text-gray-500 mb-6">
                    We'll send a confirmation code to your email.
                </p>

                {/* Form */}
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

                    {/* Forgot password + remember */}
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

                    {/* Sign In button */}
                    <button
                        type="submit"
                        className="w-full bg-black text-white py-2 rounded-md font-semibold hover:bg-gray-900 transition"
                    >
                        Sign In
                    </button>
                </form>

                {/* Divider */}
                <div className="my-6 text-center text-gray-400 text-sm">
                    Or, log in with your email
                </div>

                {/* Social logins */}
                <div className="space-y-3">
                    <button className="w-full flex items-center justify-center gap-3 bg-gray-100 py-2 rounded-md font-medium hover:bg-gray-200 transition">
                        <FaGoogle className="text-lg" />
                        Log in with Google
                    </button>
                    <button className="w-full flex items-center justify-center gap-3 bg-gray-100 py-2 rounded-md font-medium hover:bg-gray-200 transition">
                        <FaFacebook className="text-blue-600 text-lg" />
                        Log in with Facebook
                    </button>
                </div>

                {/* Register link */}
                <p className="mt-6 text-center text-sm text-gray-600">
                    Don't have an account yet?{' '}
                    <a href="/signup" className="text-blue-600 font-medium hover:underline">
                        Register
                    </a>
                </p>
            </div>
        </div>
    );
}
