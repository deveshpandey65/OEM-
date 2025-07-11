'use client';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useRouter } from 'next/navigation';
export default function GoogleLoginButton() {
    const router = useRouter();
    const handleSuccess = async (credentialResponse) => {
        const id_token = credentialResponse.credential;

        try {
            const res = await axios.post('http://localhost:5000/api/auth/google', {
                id_token
            });

            console.log("✅ Login Success:", res.data);
            localStorage.setItem('token', res.data.token);
            router.push('/')
        } catch (err) {
            console.error("❌ Login Failed:", err.response?.data || err.message);
        }
    };

    return (
        <GoogleLogin
            onSuccess={handleSuccess}
            onError={() => console.log("Google Login Error")}
        />
    );
}
