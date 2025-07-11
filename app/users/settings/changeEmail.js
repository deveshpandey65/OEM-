import { useState } from 'react';
import axios from 'axios';

export default function ChangeEmailModal({ onClose }) {
    const [newEmail, setNewEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [step, setStep] = useState(1); // 1: enter email, 2: enter OTP
    const [loading, setLoading] = useState(false);

    const handleSendOtp = async () => {
        setLoading(true);
        try {
            await axios.post('http://localhost:5000/api/auth/sendOtp', { email: newEmail });
            setStep(2);
        } catch (err) {
            alert(err.response?.data?.error || 'Failed to send OTP');
        }
        setLoading(false);
    };

    const handleChangeEmail = async () => {
        setLoading(true);
        try {
            const token = localStorage.getItem('token');

            await axios.post(
                'http://localhost:5000/api/user/changeEmail',
                {
                    newEmail,
                    otp,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                }
            );

            alert('Email changed successfully');
            onClose();
        } catch (err) {
            alert(err.response?.data?.error || 'Failed to change email');
        }
        setLoading(false);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-[#242323b7] z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
                <h2 className="text-xl font-semibold mb-4">Change Email</h2>

                {step === 1 && (
                    <>
                        <label className="block text-sm mb-1">New Email</label>
                        <input
                            type="email"
                            value={newEmail}
                            onChange={(e) => setNewEmail(e.target.value)}
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
                        <button
                            onClick={handleChangeEmail}
                            className="bg-green-600 text-white px-4 py-2 rounded"
                            disabled={loading}
                        >
                            {loading ? 'Changing...' : 'Change Email'}
                        </button>
                    </>
                )}

                <button
                    onClick={() => onClose(false)}
                    className="mt-4 text-sm text-gray-500 hover:underline"
                >
                    Cancel
                </button>
            </div>
        </div>
    );
}
