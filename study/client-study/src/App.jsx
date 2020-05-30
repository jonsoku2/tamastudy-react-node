import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Post from './pages/Post';
import Header from './components/shared/Header';

const App = () => {
  console.log(isAuthenticated);

  useEffect(() => {
    if (token) {
      console.log('fetchMe');
    }
  }, []);

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path={'/'} render={() => <Home />} />
        <Route exact path={'/posts'} component={() => <Post />} />
        <Redirect from={'*'} to={'/'} />
      </Switch>
    </Router>
  );
};

export default App;
