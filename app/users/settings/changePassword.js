// components/ChangePasswordModal.jsx
import { useState } from 'react';
import axios from 'axios';

export default function ChangePasswordModal({ onClose }) {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [step, setStep] = useState(1); // 1: get email, 2: enter OTP & password
    const [loading, setLoading] = useState(false);

    const handleSendOtp = async () => {
        setLoading(true);
        try {
            await axios.post('http://localhost:5000/api/auth/sendOtp', { email });
            setStep(2);
        } catch (err) {
            alert(err.response?.data?.error || 'Failed to send OTP');
        }
        setLoading(false);
    };

    const handleChangePassword = async () => {
        setLoading(true);
        try {
            const token = localStorage.getItem('token');

            await axios.post(
                'http://localhost:5000/api/user/changePassword',
                {
                    email,
                    otp,
                    newPassword,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                }
            );

            alert('Password changed successfully');
            onClose();
        } catch (err) {
            alert(err.response?.data?.error || 'Failed to change password');
        }
        setLoading(false);
    };
    

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-[#242323b7] z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
                <h2 className="text-xl font-semibold mb-4">Change Password</h2>

                {step === 1 && (
                    <>
                        <label className="block text-sm mb-1">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border px-3 py-2 rounded mb-4"
                        />
                        <button
                            onClick={handleSendOtp}
                            className="bg-blue-600 text-white px-4 py-2 rounded"
                            disabled={loading}
                        >
                            {loading ? 'Sending OTP...' : 'Send OTP'}
                        </button>
                    </>
                )}

                {step === 2 && (
                    <>
                        <label className="block text-sm mb-1">OTP</label>
                        <input
                            type="text"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            className="w-full border px-3 py-2 rounded mb-4"
                        />
                        <label className="block text-sm mb-1">New Password</label>
                        <input
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="w-full border px-3 py-2 rounded mb-4"
                        />
                        <button
                            onClick={handleChangePassword}
                            className="bg-green-600 text-white px-4 py-2 rounded"
                            disabled={loading}
                        >
                            {loading ? 'Changing...' : 'Change Password'}
                        </button>
                    </>
                )}

                <button
                    onClick={()=>onClose(false)}
                    className="mt-4 text-sm text-gray-500 hover:underline"
                >
                    Cancel
                </button>
            </div>
        </div>
    );
}
