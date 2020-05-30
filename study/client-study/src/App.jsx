import React, { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Post from './pages/Post';
import Auth from './pages/Auth';
import Header from './components/shared/Header';
import { AuthContext } from './hooks/useAuth';

const App = () => {
  const { token, fetchMe } = useContext(AuthContext);

  useEffect(() => {
    if (token || window.sessionStorage.getItem('token')) {
      fetchMe();
    }
  }, [token, fetchMe]);

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path={'/'} render={() => <Home />} />
        <Route exact path={'/posts'} component={() => <Post />} />
        <Route exact path={'/auth'} component={() => <Auth />} />
        <Redirect from={'*'} to={'/'} />
      </Switch>
    </Router>
  );
};

export default App;
