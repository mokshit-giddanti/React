import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import LoginNav from './components/LoginNav';
import Video from './components/video';
import Homepage from './components/homepage';
import Login from './components/login';
import Register from './components/register';
import WelcomePage from "./components/welcome";

function App() {
  const [user, setLoginUser] = useState({});

  return (
    <Router>
      <div className="App">
        <LoginNav />
        <Video/>
        <Switch>
          <Route path="/login">
            <Login setLoginUser={setLoginUser} />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/homepage">
            {user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Redirect to="/welcome" />}
          </Route>
          <Route path="/welcome">
            <WelcomePage />
          </Route>
          <Route exact path="/">
            {user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <WelcomePage />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
