// LoginNav.js
import React from 'react';
import { AppBar, Toolbar, styled, Button } from '@mui/material';
import { NavLink, useHistory } from 'react-router-dom';

const Header = styled(AppBar)`
  background: #111111;
`;

const Tabs = styled(NavLink)`
  font-size: 20px;
  margin-right: 20px;
  color: inherit;
  text-decoration: none;
`;

const LogoutButton = styled(Button)`
  && {
    font-size: 20px;
    color: inherit;
    text-decoration: none;
    margin-left: auto;
  }
`;

function LoginNav({ onLogout }) {
  const history = useHistory();

  const handleLogout = () => {
    // Perform logout actions
    // onLogout();
    
    // Reload the page and redirect to the home route ("/")
    history.push('/React');
    window.location.reload();
  };

  return (
    <div>
      <Header>
        <Toolbar>
          <Tabs to='/'>HOME</Tabs>
          <Tabs to='/dash'>DASHBOARD</Tabs>
          <Tabs to='/add'>ADD TEAM</Tabs>
          <Tabs to='/all'>EDIT TEAMS</Tabs>
          <LogoutButton color="inherit" onClick={handleLogout}>Logout</LogoutButton>
        </Toolbar>
      </Header>
    </div>
  );
}

export default LoginNav;
