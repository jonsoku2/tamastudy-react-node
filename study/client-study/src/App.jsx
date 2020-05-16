import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Post from './pages/Post';
import Header from './components/shared/Header';
import useAuth from './hooks/useAuth';

const App = () => {
  const { token, fetchMe, loginFn, registerFn, logoutFn, userData, isAuthenticated } = useAuth();

  console.log(isAuthenticated);

  useEffect(() => {
    if (token) {
      fetchMe();
    }
  }, [fetchMe, token]);

  return (
    <Router>
      <Header userData={userData} logoutFn={logoutFn} />
      <Switch>
        <Route
          exact
          path={'/'}
          render={() => (
            <Home isAuthenticated={isAuthenticated} loginFn={loginFn} registerFn={registerFn} />
          )}
        />
        <Route exact path={'/posts'} component={Post} />
        <Redirect from={'*'} to={'/'} />
      </Switch>
    </Router>
  );
};

export default App;
