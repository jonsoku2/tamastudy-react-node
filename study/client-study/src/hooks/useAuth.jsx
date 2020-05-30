import React, { useCallback, useReducer } from 'react';
import API from '../utils/API';

import { authReducer, initialState, types } from '../reducers/authReducer';

export const useAuth = () => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const fetchMe = useCallback(async () => {
    const res = await API.get('user/me');
    const user = res.data;
    dispatch({ type: types.FETCH_ME, payload: user });
  }, []);

  const loginFn = async (formData) => {
    try {
      const res = await API.post('user/login', formData);
      const token = res.data;
      dispatch({ type: types.LOGIN, payload: token });
    } catch (error) {
      console.log(error);
    }
  };

  const registerFn = async (formData) => {
    try {
      const res = await API.post('user/register', formData);
      const token = res.data;
      dispatch({ type: types.REGISTER, payload: token });
    } catch (error) {
      console.log(error);
    }
  };

  const logoutFn = useCallback(
    (history) => {
      if (state.token || window.sessionStorage.getItem('token')) {
        dispatch({ type: types.LOGOUT });
        history.push('/');
      }
    },
    [state.token],
  );

  return {
    userData: state.userData,
    isAuthenticated: !!state.userData,
    fetchMe,
    loginFn,
    registerFn,
    logoutFn,
    token: state.token,
  };
};

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  return <AuthContext.Provider value={useAuth()}>{children}</AuthContext.Provider>;
};
