import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import AuthModalPresenter from './AuthModalPresenter';
import { signinFn, signupFn } from '../../../store/actions/v1/auth.action';

const initialStateForSignin = {
  email: '',
  password: '',
};

const initialStateForSignup = {
  username: '',
  email: '',
  password: '',
};

const AuthModalContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [signinData, setSigninData] = useState(initialStateForSignin);
  const [signupData, setSignupData] = useState(initialStateForSignup);
  const [showPassword, setShowPassword] = useState(false);

  // onChange
  const handleChange = (e, formName) => {
    if (formName === 'signin') {
      setSigninData({
        ...signinData,
        [e.target.name]: e.target.value,
      });
    } else if (formName === 'signup') {
      setSignupData({
        ...signupData,
        [e.target.name]: e.target.value,
      });
    }
  };

  // onSubmit
  const handleSubmit = (e, formName) => {
    e.preventDefault();
    if (formName === 'signin') {
      dispatch(signinFn(signinData, history));
    } else if (formName === 'signup') {
      dispatch(signupFn(signupData, history));
    }
  };

  const onClickShowPassword = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div>
      <AuthModalPresenter
        onChange={handleChange}
        onSubmit={handleSubmit}
        signinData={signinData}
        signupData={signupData}
        showPassword={showPassword}
        onClickShowPassword={onClickShowPassword}
      />
    </div>
  );
};

export default AuthModalContainer;
