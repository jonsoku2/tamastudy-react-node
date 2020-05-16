import React, { useState } from 'react';
import HomePresenter from './HomePresenter';
import Login from '../../components/Login';
import Register from '../../components/Register';
import { Redirect } from 'react-router-dom';

const HomeContainer = ({ loginFn, registerFn, isAuthenticated }) => {
  const [status, setStatus] = useState('login');
  const handleStatus = (pageName) => {
    setStatus(pageName);
  };

  if (isAuthenticated) {
    return <Redirect to={'/posts'} />;
  }

  return (
    <div>
      <button onClick={() => handleStatus('login')}>로그인 </button>
      <button onClick={() => handleStatus('register')}>회원가입</button>
      {status === 'login' && <Login loginFn={loginFn} />}
      {status === 'register' && <Register registerFn={registerFn} />}
      <HomePresenter />
    </div>
  );
};

export default HomeContainer;
