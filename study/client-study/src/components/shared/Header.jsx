import React from 'react';
import { useHistory } from 'react-router-dom';

const Header = () => {
  const history = useHistory();
  return (
    <div>
      {user && (
        <>
          <img src={'user.avatar'} alt="" />
          <span>{'user.email'}</span>
          <button onClick={() => console.log('logout')}>Logout</button>
        </>
      )}
    </div>
  );
};

export default Header;
