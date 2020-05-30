export const types = {
  LOGIN: 'LOGIN',
  REGISTER: 'REGISTER',
  FETCH_ME: 'FETCH_ME',
  LOGOUT: 'LOGOUT',
};

export const initialState = {
  token: null,
  userData: null,
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case types.LOGIN:
    case types.REGISTER:
      window.sessionStorage.setItem('token', action.payload);
      return {
        token: action.payload,
      };
    case types.FETCH_ME:
      return {
        userData: action.payload,
      };
    case types.LOGOUT:
      window.sessionStorage.removeItem('token');
      return {
        token: null,
        userData: null,
      };
    default:
      return state;
  }
};
