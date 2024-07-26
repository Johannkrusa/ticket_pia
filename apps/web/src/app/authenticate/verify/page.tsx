'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function VerifyEmailPage() {
  const router = useRouter();

  const handleResendEmail = () => {
    // Add logic to resend verification email
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      <div className="flex flex-col items-center w-full max-w-lg p-8 text-center bg-gray-100 rounded-lg shadow-lg">
        <div className="mb-4">
          <svg
            className="w-16 h-16 text-blue-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 0H4v.511L9.5 9.732a1 1 0 001 0L16 5.511V5zm0 2.02L10 11l-6-3.98V15h12V7.02z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-bold mb-4">Verify your email address</h1>
        <p className="mb-4">
          We have sent a verification link to <strong>email</strong>.
        </p>
        <p className="mb-8">
          Click on the link to complete the verification process.
          <br />
          You might need to <strong>check your spam folder</strong>.
        </p>
        <div className="flex space-x-4">
          <button
            onClick={handleResendEmail}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full"
          >
            Resend email
          </button>
          <div>
            <a className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-full">
              Return to Site
            </a>
          </div>
        </div>
        <div className="mt-8 text-sm text-gray-500">
          You can reach us at [support email] if you have any questions.
        </div>
      </div>
    </div>
  );
}
