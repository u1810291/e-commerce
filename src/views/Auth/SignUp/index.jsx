import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import classNames from 'classnames';
import { useHistory } from 'react-router-dom';
import auth from '../../../services/auth';
import { PrimaryButton } from '../../../components/Buttons';
import { NormalInput } from '../../../components/Forms/Inputs';
import {
  AuthForm, ResetPassword, TextCenter, AuthFooter, AuthHeader, AuthWrapper, Text
} from './style';
import dashboard from '../../../assets/images/dashboard.jpg';

export default () => {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Email field is required').email('Invalid email address'),
      password: Yup.string().required('Password field is required')
    }),
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      auth.getToken(values).then((data) => {
        setSubmitting(false);
        history.push(`/verified?userId=${data.userId}&token=${data.token}`);
      });
    }
  });
  return (
    <AuthWrapper>
      <AuthWrapper.Left>
        <AuthHeader>
          <Text className={classNames('heading-5', 'weight-medium', 'text-black-800')}>Create Account</Text>
        </AuthHeader>
        <AuthForm onSubmit={formik.handleSubmit}>
          <NormalInput
            white
            size="large"
            placeholder="Email"
            type={formik.touched.email && formik.errors.email && 'error'}
            helperText={formik.touched.email && formik.errors.email && formik.errors.email}
            value={formik.values.email}
            onChange={(e) => formik.setFieldValue('email', e.target.value)}
          />
          <NormalInput
            eye
            white
            size="large"
            placeholder="Password"
            value={formik.values.password}
            type={formik.touched.password && formik.errors.password && 'error'}
            typePwd={formik.touched.password && formik.errors.password && 'error'}
            helperText={formik.touched.password && formik.errors.password && formik.errors.password}
            onChange={(e) => formik.setFieldValue('password', e.target.value)}
          />
          <PrimaryButton
            title="Sign in"
            type="submit"
            size="large"
            disabled={
              formik.isSubmitting
              || (formik.touched.email && !!formik.errors.email)
              || (formik.touched.password && !!formik.errors.password)
            }
          />
          <TextCenter>
            <ResetPassword
              className={classNames('body-medium', 'weight-regular', 'text-black-800')}
              onClick={() => history.push('/reset')}
            >
              Forget password?
            </ResetPassword>
          </TextCenter>
        </AuthForm>
        <AuthFooter className={classNames('caption', 'weight-regular', 'text-black-800')}>
          <div>@2020 All Rights Reserved.</div>
          <div>
            <span>Privacy and Terms </span>
          </div>
        </AuthFooter>
      </AuthWrapper.Left>
      <AuthWrapper.Right>
        <div />
        <img src={dashboard} alt="dashboard" />
      </AuthWrapper.Right>
    </AuthWrapper>
  );
};
