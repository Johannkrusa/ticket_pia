'use client';

import { registerOrganizerSchema } from '@/features/register/registerOrganizer.schema';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import CustomErrorMessageComponent from '@/components/CustomErrorMessage';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { usePostCreateOrganizer } from '@/features/register/hooks/usePostCreateOrganizer.hook';
import useValidateUser from '@/features/hooks/useValidateUser';

export default function RegisterOrganizerPage() {
  const auth = useSelector((state: any) => state.auth);

  const roleId = auth?.auth?.roleId ?? 'defaultRoleId';
  const verified = auth?.auth?.verified ?? false;

  const [authLoaded, setAuthLoaded] = useState(false);
  const [piaEmail, setPiaEmail] = useState<string | null>(null);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    if (auth && auth.auth) {
      setAuthLoaded(true);
      const newPiaEmail = auth.auth.email ?? 'Fetching data';
      setPiaEmail(newPiaEmail);
      setIsDataLoaded(true);
    }
  }, [auth]);

  useValidateUser({ roleId, verified, authLoaded });

  const { mutationCreateOrganizer, isPending } = usePostCreateOrganizer();

  const initialValues = {
    email: '',
    confirm_email: '',
    organizer_name: '',
    phone_number: '',
    organizer_email: '',
    terms_checkbox: false,
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col w-full max-w-5xl p-8">

        <h2 className="text-3xl font-bold mb-20 text-center">
          Register as an Organizer
        </h2>
        <p className="text-center text-red-500 mb-4 font-semibold">
          Note: PIA MEMBER ID or your email address used for registration will
          be utilized for creating and managing events, while the email
          associated with the organizer account will serve as the primary
          contact for event-related communications.
        </p>

        <Formik
          initialValues={initialValues}
          validationSchema={registerOrganizerSchema}
          onSubmit={(values) => {
            console.log(values);
            mutationCreateOrganizer({
              email: values.email,
              organizer_name: values.organizer_name,
              organizer_email: values.organizer_email,
              phone_number: values.phone_number,
            });
          }}
        >
          {({ setFieldValue, values, isValid }) => {
            if (isDataLoaded && piaEmail !== values.email) {
              setFieldValue('email', piaEmail);
            }
            return (
              <Form className="space-y-4">
                <h1 className="text-center font-semibold text-xl sm:text-2xl  p-2 border-b-2 border-gray-300 mb-20">
                  Organizer Information
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
                        <span className="text-md sm:text-xl  font-medium text-red-500 ml-2"></span>
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
                        readOnly
                        className="w-full text-md sm:text-xl px-3 py-2 border-b-2 bg-gray-200"
                        aria-required="true"
                        value={values.email} // Use Formik's `values` here
                        onChange={(event:any) => setFieldValue('email', event.target.value)} // Update Formik state
                      />
                      <div className="flex items-center justify-center">
                        <CustomErrorMessageComponent name="email" />
                      </div>
                    </div>
                  </div>

                  {/* confirm email */}
                  <div className="grid grid-cols-10 mt-20 mb-20 space-x-5">
                    <div className="col-span-2 ">
                      <div className="flex items-center">
                        <label
                          htmlFor="email"
                          className="text-md sm:text-xl  font-medium text-gray-700"
                        >
                          CONFIRM EMAIL ADDRESS
                        </label>
                        <span className="text-md sm:text-xl  font-medium text-red-500 ml-2">
                          *
                        </span>
                      </div>
                    </div>
                    <div className="col-span-8">
                      <Field
                        id="confirm_email"
                        name="confirm_email"
                        type="email"
                        placeholder="ENTER YOUR EMAIL ADDRESS"
                        className="w-full text-md sm:text-xl  px-3 py-2 border-b-2 border-gray-300 shadow-sm focus:outline-none focus:border-red-500 focus:ring-red-500 placeholder:italic"
                        aria-required="true"
                      />
                      <div className="flex items-center justify-center">
                        <CustomErrorMessageComponent name="confirm_email" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* organizer name */}
                <div className="grid grid-cols-10 mb-20 mt-20 space-x-5">
                  <div className="col-span-2 ">
                    <div className="flex items-center">
                      <label
                        htmlFor="organizer_name"
                        className="text-md sm:text-xl  font-medium text-gray-700"
                      >
                        ORGANIZER NAME
                      </label>
                      <span className="text-md sm:text-xl  font-medium text-red-500 ml-2">
                        *
                      </span>
                    </div>
                  </div>
                  <div className="col-span-8">
                    <Field
                      id="organizer_name"
                      name="organizer_name"
                      type="text"
                      placeholder="ENTER YOUR ORGANIZER NAME"
                      className="text-md sm:text-xl mb-20 w-full px-3 py-2 border-b-2 border-gray-300 shadow-sm focus:outline-none focus:border-red-500 focus:ring-red-500 placeholder:italic"
                      aria-required="true"
                    />
                    <div className="flex items-center justify-center">
                      <CustomErrorMessageComponent name="organizer_name" />
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

                {/* email */}
                <div className="grid grid-cols-10 mt-20 mb-20 space-x-5">
                  <div className="col-span-2 ">
                    <div className="flex items-center">
                      <label
                        htmlFor="email"
                        className="text-md sm:text-xl  font-medium text-gray-700"
                      >
                        ORGANIZER EMAIL
                      </label>
                      <span className="text-md sm:text-xl  font-medium text-red-500 ml-2">
                        *
                      </span>
                    </div>
                  </div>
                  <div className="col-span-8">
                    <Field
                      id="organizer_email"
                      name="organizer_email"
                      type="email"
                      placeholder="ENTER YOUR ORGANIZER EMAIL ADDRESS"
                      className="w-full text-md sm:text-xl mb-20  px-3 py-2 border-b-2 border-gray-300 shadow-sm focus:outline-none focus:border-red-500 focus:ring-red-500 placeholder:italic"
                      aria-required="true"
                    />
                    <div className="flex items-center justify-center">
                      <CustomErrorMessageComponent name="organizer_email" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="w-full h-60 overflow-auto border border-blue-500 p-4 bg-gray-50 mb-10">
                    <p className="text-sm leading-relaxed text-blue-500 p-5 ">
                      ---------------------------------
                      <br />
                      PIA ORGANIZER TERMS OF SERVICE
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

                <div className="flex items-center justify-center space-x-2 mb-20">
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

                <div className="py-2 px-4 flex flex-col items-center pt-10 pb-10">
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
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}
