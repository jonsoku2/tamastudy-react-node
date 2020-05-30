import React, { useContext } from 'react';
import { AuthContext } from '../../hooks/useAuth';
import { useHistory } from 'react-router-dom';

const Header = () => {
  const history = useHistory();
  const { isAuthenticated, userData, logoutFn } = useContext(AuthContext);

  return (
    <div>
      {isAuthenticated && (
        <>
          <img src={userData.avatar} alt="" />
          <span>{userData.email}</span>
          <button onClick={() => logoutFn(history)}>Logout</button>
        </>
      )}
    </div>
  );
};

export default Header;
