import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Login from '../../components/Login';
import Register from '../../components/Register';
import { AuthContext } from '../../hooks/useAuth';

const Auth = () => {
  const { isAuthenticated } = useContext(AuthContext);

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
      {status === 'login' && <Login />}
      {status === 'register' && <Register />}
    </div>
  );
};

export default Auth;
