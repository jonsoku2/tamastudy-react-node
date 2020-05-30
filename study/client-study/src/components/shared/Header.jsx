import React from 'react';

const Header = () => {
  return (
    <div>
      {true && (
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
