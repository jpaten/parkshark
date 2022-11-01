import React from 'react';
import fire from '../SignIn/fire';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const handleLogout = () => {
  fire.auth().signOut();
};

const Navbar = () => {

  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to='/'>
            Home
          </NavLink>
          <NavLink to='../MarketTrend'>
            Market Trend
          </NavLink>
          <NavLink to='../About'>
            About
          </NavLink>
          <NavLink to='../Profile'>
            Profile
          </NavLink>
        </NavMenu>
        <NavBtn onClick={handleLogout}>
          <NavBtnLink to='/'> Logout </NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
       
};

export default Navbar;