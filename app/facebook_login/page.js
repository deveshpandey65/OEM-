// 'use client';
// import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
// import axios from 'axios';
// import { FaFacebook } from 'react-icons/fa';

// export default function FacebookLoginButton() {
//     const handleFacebookResponse = async (response) => {
//         const { accessToken, userID } = response;

//         try {
//             const res = await axios.post('http://localhost:5000/api/auth/facebook', {
//                 access_token: accessToken,
//                 user_id: userID
//             });

//             console.log("✅ Facebook Login Success:", res.data);
//             localStorage.setItem('token', res.data.token);
//         } catch (error) {
//             console.error("❌ Facebook Login Failed:", error.response?.data || error.message);
//         }
//     };

//     return (
//         <FacebookLogin
//             appId="756028846871659"
//             autoLoad={false}
//             callback={handleFacebookResponse}
//             render={renderProps => (
//                 <button
//                     onClick={renderProps.onClick}
//                     className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md w-full justify-center shadow transition duration-200"
//                 >
//                     <FaFacebook className="text-xl" />
//                     <span className="font-medium">Continue with Facebook</span>
//                 </button>
//             )}
//         />
//     );
// }
