'use client';

import { Form, Formik } from 'formik';

import Button from '../Button';
import InputFormik from '../InputFormik';
import axios from 'axios';
import { signUpSchema } from '@/libs/validations/signUpSchema';
import { useRouter } from 'next/navigation';

const SignUpForm = () => {
  const router = useRouter();

  return (
    <div className="flex w-full min-h-screen items-center justify-center">
      <Formik
        initialValues={{
          email: '',
          name: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={signUpSchema}
        onSubmit={async (data, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          try {
            const response = await axios.post('/api/auth/signup', {
              email: data.email,
              name: data.name,
              password: data.password,
            });

            if (response.status === 201) {
              alert('회원가입 성공');
              resetForm();
              router.push('/signin');
            }
          } catch (error: any) {
            alert(
              error.response?.data?.message || 'An unexpected error occurred'
            );
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form className="w-full max-w-[330px] flex flex-col gap-6">
            <InputFormik
              label="EMAIL"
              name={'email'}
              type={'email'}
              touched={touched}
              errors={errors}
            />
            <InputFormik
              label="NAME"
              name={'name'}
              type={'text'}
              touched={touched}
              errors={errors}
            />

            <InputFormik
              label="PASSWORD"
              name={'password'}
              type={'password'}
              touched={touched}
              errors={errors}
            />
            <InputFormik
              label="CONFIRM PASSWORD"
              name={'confirmPassword'}
              type={'password'}
              touched={touched}
              errors={errors}
            />
            <Button type="submit" disabled={isSubmitting}>
              Sign Up
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default SignUpForm;
