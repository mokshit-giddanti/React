import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Navbar from './Navbar';
import EditUser from './EditUser';
import Video from './video';
import AllUsers from './AllUsers';
import AddTeams from './AddTeams';
import App from "../App";
import Dash from "./Dash_Test";
import Login from "./login";
import WelcomePage from "./welcome";

const Homepage = ({ setLoginUser }) => {
    const handleLogout = () => {
        // Perform logout functionality here, e.g., clear user session
        setLoginUser({});
        // Redirect to the login page after logout
        return <Redirect to="/login" />;
    };

    return (
        <Router>
            <div>
                <Navbar />
                <Video />
                <Switch>
                    <Route path='/' exact component={WelcomePage} />
                    <Route path='/all' exact component={AllUsers} />
                    <Route path="/add" exact component={AddTeams} />
                    <Route path='/edit/:id' exact component={EditUser} />
                    <Route path='/dash' exact component={Dash} />
                    <Route path='/login' component={Login} />
                    <Route path='/logout' render={handleLogout} />
                </Switch>
            </div>
        </Router>
    );
};

export default Homepage;
