'use client';
import { useState } from 'react';
import { FaEye, FaEyeSlash, FaGoogle, FaFacebook } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const router = useRouter();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        alert('Signup successful!');
        router.push('/signin');
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
                <h2 className="text-3xl font-bold mb-1">Sign Up</h2>
                <p className="text-sm text-gray-500 mb-6">
                    We'll send a confirmation code to your email.
                </p>

                {/* Form */}
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm font-semibold mb-1">
                            Username <span className="text-red-500">*</span>
                        </label>
                        <input
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            type="text"
                            required
                            className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black"
                            placeholder="Enter your username"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold mb-1">
                            Email <span className="text-red-500">*</span>
                        </label>
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
                        <label className="block text-sm font-semibold mb-1">
                            Password <span className="text-red-500">*</span>
                        </label>
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

                {/* Divider */}
                <div className="my-6 text-center text-gray-400 text-sm">
                    Or, Create an account with your email
                </div>

                {/* Social Buttons */}
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

                {/* Sign in link */}
                <p className="mt-6 text-center text-sm text-gray-600">
                    Already have an Account?{' '}
                    <a href="/signin" className="text-green-600 font-medium hover:underline">
                        Sign In
                    </a>
                </p>
            </div>
        </div>
    );
}
