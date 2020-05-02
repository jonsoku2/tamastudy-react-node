import React, { useEffect } from 'react';
import AuthModal from '../../organisms/AuthModal';
import CommonLayout from '../../layouts/CommonLayout';
import { useHistory, useLocation } from 'react-router-dom';

const Auth = () => {
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (!location.search) {
      history.push('/auth?signin');
    }
  }, [history, location]);

  return (
    <CommonLayout noFooter>
      <AuthModal />
    </CommonLayout>
  );
};

export default Auth;
