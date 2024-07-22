'use client';

import { authSchema } from '@/features/authenticate/auth.schemas';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useRouter } from 'next/navigation';

import { usePostAuthLogin } from '@/features/authenticate/auth.usePostAuth';
import CustomErrorMessageComponent from '@/components/CustomErrorMessage';

export default function AuthPage() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const {mutationAuth, isPending} = usePostAuthLogin()

  usePostAuthLogin();

  const initialValues = {
    email: '',
    password: '',
    keep_login: false,
  };

  const navRegister = () => {
    router.push('/register');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col w-full max-w-2xl p-8">
        <h2 className="text-4xl font-bold mb-6 text-center">LOGIN</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={authSchema}
          onSubmit={(values) => {
            mutationAuth({email: values.email, password: values.password, keep_login: values.keep_login})
          }}
        >
          {({ isValid }) => (
            <Form className="space-y-4">
              <div>
                <h1 className="text-center font-medium text-2xl p-2 border-b-2 border-gray-300 mb-16 mt-6">
                  LOGIN WITH PIA MEMBER ID AND PASSWORD
                </h1>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xl font-semibold text-gray-700 mb-4"
                >
                  PIA MEMBER ID (EMAIL)
                </label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  placeholder="ENTER YOUR EMAIL ADDRESS"
                  className="w-full text-xl px-3 py-2 border-b-2 border-gray-300 shadow-sm focus:outline-none focus:border-red-500 focus:ring-red-500 placeholder:italic"
                  aria-required="true"
                />
                <div className="flex items-center justify-center">
                  <CustomErrorMessageComponent name="email" />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-xl font-medium text-gray-700 mb-4"
                >
                  PASSWORD
                </label>
                <div className="relative mb-10">
                  <Field
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="ENTER YOUR PASSWORD"
                    className="w-full text-xl px-3 py-2 border-b-2 border-gray-300 shadow-sm focus:outline-none focus:border-red-500 focus:ring-red-500 placeholder:italic pr-12"
                    aria-required="true"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600 text-2xl z-10"
                  >
                    {showPassword ? (
                      <AiOutlineEye />
                    ) : (
                      <AiOutlineEyeInvisible className="text-gray-300" />
                    )}
                  </button>
                  <div className="flex items-center justify-center">
                    <CustomErrorMessageComponent name="password" />
                  </div>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <Field
                  id="keep_login"
                  name="keep_login"
                  type="checkbox"
                  className="w-4 h-4"
                />
                <label htmlFor="keep-login" className="ml-2 text-md">
                  Keep me signed in
                </label>
              </div>
              <p className="text-sm text-gray-500">
                *Do not select this option on a publicly used computer.
              </p>

              <div className="py-2 px-4 flex flex-col items-center">
                <button
                  disabled={!isValid}
                  type="submit"
                  className={`w-[60%] h-14 mt-4 ${
                    !isValid
                      ? 'bg-red-500 cursor-not-allowed'
                      : 'bg-blue-400 hover:bg-blue-500'
                  } text-white font-semibold rounded-md shadow-sm focus:outline-none`}
                >

                  {(isValid || !isPending) ? 'LOGIN' : 'Input is not yet completed'}
                </button>
                <div className="underline mt-4 text-center text-md text-black">
                  Forgot my password
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <div className="flex flex-col items-center w-full max-w-2xl p-8">
        <div className="flex flex-col w-full border-2 border-gray-300 mt-6 p-8 items-center">
          <div className="text-center text-lg mb-4 font-bold">
            IF YOU DO NOT OWN A PIA MEMBER ACCOUNT
          </div>
          <button
            onClick={navRegister}
            className="w-[50%] h-14 bg-black text-white font-bold rounded-md shadow-sm hover:bg-gray-800"
          >
            REGISTER
          </button>
        </div>
        {/* <button
          className="w-[50%] h-14 mt-4 bg-white text-black border border-black font-bold rounded-md shadow-sm hover:bg-gray-100"
        >
          Back to Home
        </button> */}
      </div>
    </div>
  );
}
