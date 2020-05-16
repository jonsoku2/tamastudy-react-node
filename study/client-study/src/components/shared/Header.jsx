import React from 'react';
import { useHistory } from 'react-router-dom';

const Header = ({ userData: user, logoutFn }) => {
  const history = useHistory();
  return (
    <div>
      {user && (
        <>
          <img src={user.avatar} alt="" />
          <span>{user.email}</span>
          <button onClick={() => logoutFn(history)}>Logout</button>
        </>
      )}
    </div>
  );
};

export default Header;
