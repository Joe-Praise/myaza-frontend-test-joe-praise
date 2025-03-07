'use client';
import React from 'react';
import { Logo, RenderIf } from '../shared';
import Image from 'next/image';
import logo from '@/public/images/logo.png';
import * as Yup from 'yup';
import { Formik } from 'formik';
import queries from '@/services/queries/auth';
import { InputField } from '../form control';
import { Loader2 } from 'lucide-react';

import Link from 'next/link';
import { Button } from '../ui/Button';

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Please enter your email address'),
  password: Yup.string()
    .min(1, 'Please enter your password')
    .required('Please enter your password'),
});

const initialValues = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const { mutate, isPending } = queries.login();

  return (
    <div className='basis-[57%] bg-primary-100 min-h-[100dvh] flex md:block justify-center items-center'>
      <div className='md:max-w-[424px] md:ms-auto md:me-[86px] md:mt-[148px]'>
        <div className='flex flex-col gap-[24px]'>
          <Logo>
            <Image
              src={logo}
              alt="company's logo icon"
              className='size-[31.04px] '
            />
          </Logo>

          <div className=' w-max mx-auto'>
            <h1 className='text-[24px] font-space-grotesk font-bold leading-[25px] mb-[12px]'>
              Welcome back, Ali Riaz 🙇🏾‍♀️
            </h1>
            <p className='font-karla text-gray-100 text-center -tracking-[4%] leading-[24px]'>
              Login to access your Uifry account
            </p>
          </div>

          <div>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={mutate}
            >
              {(props) => {
                const {
                  values,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  errors,
                  touched,
                } = props;
                return (
                  <form
                    className='flex flex-col gap-[16px] font-karla'
                    onSubmit={handleSubmit}
                  >
                    <InputField
                      name='email'
                      type='email'
                      id='email'
                      placeholder='E.g Aliriaz@Uifry.com'
                      label='Email Address'
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      errors={errors}
                      touched={touched}
                    />

                    <div className='app__login_form__password'>
                      <InputField
                        name='password'
                        id='password'
                        type='password'
                        placeholder='************'
                        label='Password'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errors={errors}
                        touched={touched}
                      />

                      <p className='text-nav-active font-bold leading-[24px] w-max ms-auto mt-[8px]'>
                        I Forgot My Password!
                      </p>
                    </div>

                    <Button
                      // isLoading={isPending}
                      type='submit'
                      variant={'default'}
                      className='mt-[48px]'
                    >
                      <RenderIf condition={isPending}>
                        <Loader2 className='animate-spin' size={16} />
                      </RenderIf>
                      <RenderIf condition={!isPending}>Login</RenderIf>
                    </Button>

                    <p className='font-semibold leading-[24px] -tracking-[4%] w-max mx-auto'>
                      Not Ali Riaz?{' '}
                      <Link
                        href={''}
                        className='underline underline-offset-2 font-bold  text-nav-active'
                      >
                        Login To Continue
                      </Link>
                    </p>
                  </form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
