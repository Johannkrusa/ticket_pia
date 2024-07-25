'use client';

import { registerUserSchema } from '@/features/register/registerUser.schema';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import CustomErrorMessageComponent from '@/components/CustomErrorMessage';
import { usePostCreateUser } from '@/features/register/hooks/usePostCreateUser.hook';
import {
  generateYearOptions,
  generateMonthOptions,
  generateDayOptions,
} from '../../../features/register/hooks/dateOptions.hook';
import { usePasswordVisibility } from '@/features/register/hooks/usePasswordVisibility.hook';

export default function RegisterUserPage() {
  const { mutationCreateUser, isPending } = usePostCreateUser();

  const {
    showPassword,
    showConfirmPassword,
    togglePasswordVisibility,
    toggleConfirmPasswordVisibility,
  } = usePasswordVisibility();

  const initialValues = {
    email: '',
    password: '',
    confirm_password: '',
    first_name: '',
    last_name: '',
    gender: null,
    birthdate: {
      year: '',
      month: '',
      day: '',
    },
    phone_number: '',
    email_notificaiton: false,
    terms_checkbox: false,
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col w-full max-w-5xl p-8">
        {/* placeholder  */}
        <img
          src="https://cdn.discordapp.com/attachments/1252607381305692190/1264272085002489937/image.png?ex=669d44a2&is=669bf322&hm=431db8dbf778b30c28a483c3820822636b4071546e6eee304c6992a04f335cc5&"
          alt=""
          className="mb-20"
        />
        <h2 className="text-3xl font-bold mb-20 text-center">
          REGISTER AS A NEW USER
        </h2>
        <p className="text-center mb-4 font-light">
          After entering your information, please read the Terms of Use and
          click the “Send Confirmation Email” button.
        </p>
        <Formik
          initialValues={initialValues}
          validationSchema={registerUserSchema}
          onSubmit={(values) => {
            mutationCreateUser({
              email: values.email,
              password: values.password,
              first_name: values.first_name,
              last_name: values.last_name,
              gender: values.gender,
              birthdate: {
                year: values.birthdate.year,
                month: values.birthdate.month,
                day: values.birthdate.day,
              },
              phone_number: values.phone_number,
              email_notification: values.email_notificaiton,
            });
          }}
        >
          {({ dirty, isValid }) => (
            <Form className="space-y-4">
              <h1 className="text-center font-semibold text-xl sm:text-2xl  p-2 border-b-2 border-gray-300 mb-8">
                Account Information
              </h1>
              <div className="">
                {/* email */}
                <div className="grid grid-cols-10 mt-20 mb-20 space-x-5">
                  <div className="col-span-2 ">
                    <div className="flex items-center">
                      <label
                        htmlFor="email"
                        className="text-md sm:text-xl  font-medium text-gray-700"
                      >
                        PIA MEMBER ID
                      </label>
                      <span className="text-md sm:text-xl  font-medium text-red-500 ml-2">
                        *
                      </span>
                    </div>
                    <div className="text-md text-gray-500 mt-1">
                      (EMAIL ADDRESS)
                    </div>
                  </div>
                  <div className="col-span-8">
                    <Field
                      id="email"
                      name="email"
                      type="email"
                      placeholder="ENTER YOUR EMAIL ADDRESS"
                      className="w-full text-md sm:text-xl  px-3 py-2 border-b-2 border-gray-300 shadow-sm focus:outline-none focus:border-red-500 focus:ring-red-500 placeholder:italic"
                      aria-required="true"
                    />
                    <div className="flex items-center justify-center">
                      <CustomErrorMessageComponent name="email" />
                    </div>
                  </div>
                </div>

                {/* password */}
                <div className="grid grid-cols-10 mb-20 mt-20 space-x-5">
                  <div className="col-span-2 ">
                    <div className="flex items-center align-top">
                      <label
                        htmlFor="password"
                        className="text-md sm:text-xl  font-medium text-gray-700"
                      >
                        PASSWORD
                      </label>
                      <span className="text-md sm:text-xl  font-medium text-red-500 ml-2">
                        *
                      </span>
                    </div>
                  </div>
                  <div className="col-span-8">
                    <div className="relative">
                      <Field
                        id="password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="ENTER YOUR PASSWORD"
                        className="w-full text-md sm:text-xl  px-3 py-2 border-b-2 border-gray-300 shadow-sm focus:outline-none focus:border-red-500 focus:ring-red-500 placeholder:italic"
                        aria-required="true"
                      />
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600 text-2xl"
                      >
                        {showPassword ? (
                          <AiOutlineEye />
                        ) : (
                          <AiOutlineEyeInvisible className="text-gray-300" />
                        )}
                      </button>
                    </div>
                    <div className="flex items-center justify-center">
                      <CustomErrorMessageComponent name="password" />
                    </div>
                  </div>
                </div>

                {/* confirm password */}
                <div className="grid grid-cols-10 mb-20 mt-20 space-x-5">
                  <div className="col-span-2 ">
                    <div className="flex-col items-center align-top">
                      <div>
                        <label
                          htmlFor="confirm_password"
                          className="text-md sm:text-xl  font-medium text-gray-700"
                        >
                          CONFIRM
                        </label>
                        <span className="text-md sm:text-xl  font-medium text-red-500 ml-2">
                          *
                        </span>
                      </div>

                      <label
                        htmlFor="confirm_password"
                        className="text-md sm:text-xl  font-medium text-gray-700"
                      >
                        PASSWORD
                      </label>
                    </div>
                  </div>
                  <div className="col-span-8">
                    <div className="relative">
                      <Field
                        id="confirm_password"
                        name="confirm_password"
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder="RE-ENTER YOUR PASSWORD"
                        className="text-md sm:text-xl  w-full px-3 py-2 border-b-2 border-gray-300 shadow-sm focus:outline-none focus:border-red-500 focus:ring-red-500 placeholder:italic"
                        aria-required="true"
                      />
                      <button
                        type="button"
                        onClick={toggleConfirmPasswordVisibility}
                        className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600 text-2xl"
                      >
                        {showConfirmPassword ? (
                          <AiOutlineEye />
                        ) : (
                          <AiOutlineEyeInvisible className="text-gray-300" />
                        )}
                      </button>
                    </div>
                    <div className="flex items-center justify-center">
                      <CustomErrorMessageComponent name="confirm_password" />
                    </div>
                  </div>
                </div>

                {/* first name */}
                <div className="grid grid-cols-10 mb-20 mt-20 space-x-5">
                  <div className="col-span-2 ">
                    <div className="flex items-center">
                      <label
                        htmlFor="first_name"
                        className="text-md sm:text-xl  font-medium text-gray-700"
                      >
                        FIRST NAME
                      </label>
                      <span className="text-md sm:text-xl  font-medium text-red-500 ml-2">
                        *
                      </span>
                    </div>
                  </div>
                  <div className="col-span-8">
                    <Field
                      id="first_name"
                      name="first_name"
                      type="text"
                      placeholder="ENTER YOUR FIRST NAME"
                      className="text-md sm:text-xl  w-full px-3 py-2 border-b-2 border-gray-300 shadow-sm focus:outline-none focus:border-red-500 focus:ring-red-500 placeholder:italic"
                      aria-required="true"
                    />
                    <div className="flex items-center justify-center">
                      <CustomErrorMessageComponent name="first_name" />
                    </div>
                  </div>
                </div>

                {/* last name */}
                <div className="grid grid-cols-10 mb-20 mt-20 space-x-5">
                  <div className="col-span-2 ">
                    <div className="flex items-center">
                      <label
                        htmlFor="last_name"
                        className="text-md sm:text-xl  font-medium text-gray-700"
                      >
                        LAST NAME
                      </label>
                      <span className="text-md sm:text-xl  font-medium text-red-500 ml-2">
                        *
                      </span>
                    </div>
                  </div>
                  <div className="col-span-8">
                    <Field
                      id="last_name"
                      name="last_name"
                      type="text"
                      placeholder="ENTER YOUR LAST NAME"
                      className="text-md sm:text-xl  w-full px-3 py-2 border-b-2 border-gray-300 shadow-sm focus:outline-none focus:border-red-500 focus:ring-red-500 placeholder:italic"
                      aria-required="true"
                    />
                    <div className="flex items-center justify-center">
                      <CustomErrorMessageComponent name="last_name" />
                    </div>
                  </div>
                </div>

                {/* gender */}
                <div className="grid grid-cols-10 mb-20 mt-20 space-x-5">
                  <div className="col-span-2">
                    <div className="flex items-center">
                      <label
                        htmlFor="gender"
                        className="text-md sm:text-xl  font-medium text-gray-700"
                      >
                        GENDER
                      </label>
                      <span className="text-md sm:text-xl  font-medium text-red-500 ml-2">
                        *
                      </span>
                    </div>
                  </div>
                  <div className="col-span-8 space-y-6">
                    <div className="flex space-x-6">
                      <label className="flex items-center space-x-2">
                        <Field
                          id="male"
                          name="gender"
                          type="radio"
                          value="MALE"
                          className="form-radio w-6 h-6"
                        />
                        <span className="text-md sm:text-xl  text-gray-700">
                          MALE
                        </span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <Field
                          id="female"
                          name="gender"
                          type="radio"
                          value="FEMALE"
                          className="form-radio w-6 h-6 text-gray-600"
                        />
                        <span className="text-md sm:text-xl  text-gray-700">
                          FEMALE
                        </span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <Field
                          id="others"
                          name="gender"
                          type="radio"
                          value="OTHERS"
                          className="form-radio w-6 h-6 text-gray-600"
                        />
                        <span className="text-md sm:text-xl  text-gray-700">
                          OTHERS
                        </span>
                      </label>
                    </div>
                    <div className="flex justify-start items-start">
                      <label className="flex items-center space-x-2">
                        <Field
                          id="prefer_not_to_say"
                          name="gender"
                          type="radio"
                          value="PREFER_NOT_TO_SAY"
                          className="form-radio w-6 h-6 text-gray-600"
                        />
                        <span className="text-md sm:text-xl  text-gray-700">
                          PREFER NOT TO SAY
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* birthdate */}
                <div className="grid grid-cols-10 mb-20 mt-20 space-x-5">
                  <div className="col-span-2 ">
                    <div className="flex items-center">
                      <label
                        htmlFor="birthdate"
                        className="text-md sm:text-xl  font-medium text-gray-700"
                      >
                        BIRTHDATE
                      </label>
                      <span className="text-md sm:text-xl  font-medium text-red-500 ml-2">
                        *
                      </span>
                    </div>
                  </div>
                  <div className="col-span-8 flex space-x-4">
                    <Field
                      as="select"
                      id="year"
                      name="birthdate.year"
                      className="text-md sm:text-xl  w-full px-3 py-2 border-b-2 border-gray-300 shadow-sm focus:outline-none focus:border-red-500 focus:ring-red-500 placeholder:italic"
                      aria-required="true"
                    >
                      <option disabled>SELECT YEAR </option>
                      {generateYearOptions()}
                    </Field>
                    <Field
                      as="select"
                      id="month"
                      name="birthdate.month"
                      className="text-md sm:text-xl  w-full px-3 py-2 border-b-2 border-gray-300 shadow-sm focus:outline-none focus:border-red-500 focus:ring-red-500 placeholder:italic"
                      aria-required="true"
                    >
                      <option disabled>SELECT MONTH </option>
                      {generateMonthOptions()}
                    </Field>
                    <div className="w-full flex">
                      <Field
                        as="select"
                        id="day"
                        name="birthdate.day"
                        className="text-md sm:text-xl  w-full px-3 py-2 border-b-2 border-gray-300 shadow-sm focus:outline-none focus:border-red-500 focus:ring-red-500 placeholder:italic"
                        aria-required="true"
                      >
                        <option disabled>SELECT DAY </option>
                        {generateDayOptions()}
                      </Field>
                      <div className="absolute items-center justify-center">
                        <CustomErrorMessageComponent name="birthdate" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* CONTACT INFORMATION */}
                <h1 className="block text-center font-semibold text-md sm:text-xl  p-2 mt-20 border-b-2 border-gray-300 mb-8">
                  CONTACT INFORMATION
                </h1>
                <div className="space-y-4">
                  {/* phone number */}
                  <div className="grid grid-cols-10 mb-20 mt-20 space-x-5">
                    <div className="col-span-2 ">
                      <div className="flex items-center">
                        <label
                          htmlFor="phone_number"
                          className="text-md sm:text-xl  font-medium text-gray-700"
                        >
                          PHONE{' '}
                          <span className="sm:hidden inline text-red-500">
                            *
                          </span>{' '}
                          NUMBER{' '}
                          <span className="sm:inline hidden text-red-500">
                            *
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="col-span-8">
                      <Field
                        id="phone_number"
                        name="phone_number"
                        type="text"
                        placeholder="ENTER YOUR PHONE NUMBER"
                        className="w-full text-md sm:text-xl  px-3 py-2 border-b-2 border-gray-300 shadow-sm focus:outline-none focus:border-red-500 focus:ring-red-500 placeholder:italic"
                        aria-required="true"
                      />
                      <div className="flex items-center justify-center">
                        <CustomErrorMessageComponent name="phone_number" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* NOTIFICATION SETTINGS */}
                <h1 className="text-center font-semibold text-md sm:text-xl  p-2 border-b-2 border-gray-300">
                  NOTIFICATION SETTINGS
                </h1>
                <div className="space-y-4">
                  {/* RECEIVE AN EMAIL */}
                  <div className="grid grid-cols-10 mb-20 mt-20 space-x-5">
                    <div className="col-span-2">
                      <div className="flex items-center">
                        <label
                          htmlFor="email_notification"
                          className="text-md sm:text-xl font-medium text-gray-700"
                        >
                          EMAIL <span className="text-red-500">*</span>{' '}
                          NOTIFICATION
                        </label>
                      </div>
                    </div>
                    <div className="col-span-8 space-y-4">
                      <div className="flex space-x-8 sm:space-x-20">
                        <label className="flex items-center align-middle space-x-2">
                          <Field
                            id="email_notification"
                            name="email_notification"
                            type="radio"
                            value="true"
                            className="form-radio h-6 w-6 text-gray-600"
                          />
                          <div className="flex flex-col">
                            <span className="text-md sm:text-xl  text-gray-700">
                              RECEIVE AN EMAIL
                            </span>
                            <span className="text-md text-red-500">
                              (RECOMMENDED)
                            </span>
                          </div>
                        </label>
                        <label className="flex items-center space-x-2">
                          <Field
                            id="email_notification"
                            name="email_notification"
                            type="radio"
                            value="false"
                            className="form-radio w-6 h-6 text-gray-600"
                          />
                          <span className="text-md sm:text-xl  text-gray-700">
                            DO NOT RECEIVE
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-60 overflow-auto border border-blue-500 p-4 bg-gray-50">
                    <p className="text-sm leading-relaxed text-blue-500 p-5">
                      ---------------------------------
                      <br />
                      PIA Membership Agreement
                      <br />
                      ---------------------------------
                      <br />
                      <br />
                      Article 1: (Scope and Amendment of PIA Membership
                      Agreement) The PIA Membership Agreement (hereinafter
                      referred to as the “PIA Membership Agreement”) is a
                      contract between PIA Corporation (hereinafter referred to
                      as the “Company”) and Pia Corporation (hereinafter
                      referred to as “Pia”). The PIA Membership Agreement
                      (hereinafter referred to as the “PIA Membership
                      Agreement”) is a contract between PIA Corporation
                      (hereinafter referred to as the “Company”) and PIA Inc.
                      (hereinafter referred to as the “Company”) (hereinafter
                      referred to as the “Service” and includes services
                      provided through the “Ticket PIA” application and other
                      services provided by the Company as well as the services
                      set forth in each individual provision (set forth in the
                      following section)). (hereinafter referred to as the
                      “Service”). The “Services” shall apply to the Company and
                      PIA members (hereinafter referred to as “Members”) with
                      respect to the use of the “Ticket PIA” application, etc.
                      provided by the Company.
                      <br />
                      <br />
                      PIA Membership Terms and Conditions In addition to the PIA
                      Terms of Use, the Company may also provide guidelines,
                      policies, or other documents by any other name that
                      stipulate the terms and conditions of use of the service
                      (hereinafter referred to as “Individual Regulations” and
                      together with the PIA Terms of Use, “Terms and Conditions,
                      etc.”). In the event that there are other documents that
                      stipulate terms and conditions of use of the Service
                      (hereinafter referred to as “Individual Regulations”),
                      Members must use the Service in accordance with the
                      provisions of the Individual Regulations as well as the
                      PIA Membership Agreement.
                      <br />
                      <br />
                      Members must check the information, precautions, etc.
                      provided in the Service each time they use the Service. By
                      using the Service, members are deemed to have agreed to
                      all of the terms and conditions contained in the Terms of
                      Service.
                      <br />
                      <br />
                      The Company may change the Terms of Service in accordance
                      with the provisions of Article 548-4 of the Civil Code. In
                      the event that the Terms of Service are changed, the
                      Company will notify members at least one month prior to
                      the change, the contents of the Terms of Service, and the
                      effective date of the change on the Company`s website. If
                      a member uses the Service after the Company has notified
                      the member of the revised Terms and Conditions and after
                      the revised Terms and Conditions have become effective,
                      the member will be deemed to have agreed to the revised
                      Terms and Conditions. If a member does not agree to the
                      modified version of the Terms of Use, etc., the member may
                      not use the Service any further.
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center space-x-2 mt-20 mb-20">
                  <Field
                    id="terms_checkbox"
                    name="terms_checkbox"
                    type="checkbox"
                    className="form-checkbox h-6 w-6 text-gray-600"
                  />
                  <label
                    htmlFor="terms_checkbox"
                    className="text-md text-gray-700"
                  >
                    I AGREE TO THE TERMS AND CONDITIONS AND PRIVACY POLICY
                  </label>
                  <div className="absolute items-center justify-center">
                    <CustomErrorMessageComponent name="terms_checkbox" />
                  </div>
                </div>

                <div className="py-2 px-4 flex flex-col items-center">
                  <button
                    type="submit"
                    disabled={!isValid || isPending}
                    className={`w-[60%] h-14 mt-4 ${
                      !isValid
                        ? 'bg-red-500 cursor-not-allowed'
                        : isPending
                          ? 'bg-gray-500 cursor-not-allowed'
                          : 'bg-blue-400 hover:bg-blue-500'
                    } text-white font-semibold rounded-md shadow-sm focus:outline-none`}
                  >
                    {isPending
                      ? 'REGISTERING'
                      : !isValid
                        ? 'Invalid Input'
                        : 'Register'}
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
