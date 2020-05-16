import { useState, useCallback } from 'react';
import axios from 'axios';

export default () => {
  const [token, setToken] = useState('');
  const [userData, setUserData] = useState(null);

  const fetchMe = useCallback(async () => {
    try {
      const config = {
        headers: {
          authorization: `Bearer ${window.sessionStorage.getItem('token')}`,
        },
      };
      const res = await axios.get('http://localhost:5001/user/me', config);
      const user = res.data;
      setUserData(user);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const loginFn = async (formData) => {
    try {
      const res = await axios.post('http://localhost:5001/user/login', formData);
      const token = res.data;
      setToken(token);
      window.sessionStorage.setItem('token', token);
    } catch (error) {
      console.log(error);
    }
  };

  const registerFn = async (formData) => {
    try {
      const res = await axios.post('http://localhost:5001/user/login', formData);
      const token = res.data;
      window.sessionStorage.setItem('token', token);
      setToken(token);
    } catch (error) {
      console.log(error);
    }
  };

  const logoutFn = useCallback(
    (history) => {
      if (token) {
        setToken(null);
        setUserData(null);
        window.sessionStorage.removeItem('token');
        history.push('/');
      }
    },
    [token],
  );

  return {
    userData: userData,
    isAuthenticated: !!userData,
    fetchMe,
    loginFn,
    registerFn,
    logoutFn,
    token,
  };
};
