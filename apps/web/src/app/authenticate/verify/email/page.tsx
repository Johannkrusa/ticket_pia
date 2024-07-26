'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function EmailVerifyPage() {
  const [verificationStatus, setVerificationStatus] = useState('Verifying...');

//   useEffect(() => {
//     // Extract the token from the URL
//     const queryParams = new URLSearchParams(location.search);
//     const token = queryParams.get('token');

//     // Simulate email verification
//     const verifyEmail = async (token) => {
//       try {
//         // Replace the URL with your verification endpoint
//         const response = await axios.post('/api/verify-email', { token });
//         if (response.data.success) {
//           setVerificationStatus('Email verified successfully!');
//         } else {
//           setVerificationStatus('Email verification failed. Please try again.');
//         }
//       } catch (error) {
//         setVerificationStatus('An error occurred. Please try again.');
//       }
//     };

//     if (token) {
//       verifyEmail(token);
//     } else {
//       setVerificationStatus('Invalid verification link.');
//     }
//   }, [location.search]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Email Verification</h1>
      <p>{verificationStatus}</p>
    </div>
  );
}
