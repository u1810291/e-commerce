/* eslint-disable camelcase */
import React from 'react';

import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import { NormalInput, PasswordInput } from '../../../components/Forms/Inputs';
import { PrimaryButton } from '../../../components/Buttons';
import {
  AuthForm,
  ResetPassword,
  TextCenter,
  AuthHeader,
  AuthWrapper,
  Text,
  Privacy,
  SignUp,
  CustomLink,
  FooterText
} from '../style';
import { PureCheckbox } from '../../../components/CheckBox';
import { login } from '../../../redux/modules/auth/actions';
import logo from '../../../assets/icons/logo2.svg';

export default () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Username fieled is required'),
      password: Yup.string().required('Password field is required')
    }),
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      dispatch(login(values, (
        access_token,
        refresh_token
      ) => {
        setSubmitting(false);
        history.push(`/verified?access_token=${access_token}&refresh_token=${refresh_token}`);
      }));
    }
  });
  return (
    <AuthWrapper>
      <AuthWrapper.Center className="noselect">
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img src={logo} />
        <AuthForm onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit();
        }}
        >
          <AuthHeader>
            <Text>Sign In</Text>
          </AuthHeader>
          <TextCenter>Just sign in if you have an account. Enjoy our Website.</TextCenter>
          <NormalInput
            white
            size="large"
            placeholder="Username"
            type={formik.touched.username && formik.errors.username && 'error'}
            helperText={formik.touched.username && formik.errors.username && formik.errors.username}
            value={formik.values.username}
            onChange={(e) => formik.setFieldValue('username', e.target.value)}
          />
          <PasswordInput
            eye
            white
            size="large"
            placeholder="Password"
            type={formik.touched.password && formik.errors.password && 'error'}
            helperText={formik.touched.password && formik.errors.password && formik.errors.password}
            value={formik.values.password}
            onChange={(e) => formik.setFieldValue('password', e.target.value)}
          />
          <TextCenter>
            <TextCenter.Left>
              <PureCheckbox type="checkbox" readOnly />
            </TextCenter.Left>
            Remember me
            <TextCenter.Right>
              <ResetPassword onClick={() => history.push('/reset')}>Forget password?</ResetPassword>
            </TextCenter.Right>
          </TextCenter>
          <PrimaryButton title="Sign in" type="submit" size="large" />
          <FooterText>
            <SignUp onClick={() => history.push('/signup')}>Cant login? Sign up for new user?</SignUp>
            <Privacy>
              {/*  eslint-disable-next-line react/no-unescaped-entities */}
              By signing up, you confirm that you've read and accepted our
              <CustomLink onClick={() => history.push('/reset')}> User Notice </CustomLink>
              and
              <CustomLink onClick={() => history.push('/reset')}> Privacy Policy</CustomLink>
              .
            </Privacy>
          </FooterText>
        </AuthForm>
      </AuthWrapper.Center>
    </AuthWrapper>
  );
};
