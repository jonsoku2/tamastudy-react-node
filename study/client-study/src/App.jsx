import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Post from './pages/Post';
import Auth from './pages/Auth';
import Header from './components/shared/Header';

const App = () => {
  useEffect(() => {
    if ('token') {
      console.log('fetchMe');
    }
  }, []);

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
