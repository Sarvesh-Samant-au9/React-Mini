import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBar = styled.nav`
  height: 60px;
  background-color: transparent;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem calc((100vw - 1300px) / 2);
`;
const Logo = styled(Link)`
  padding-left: 1rem;
  font-size: 2rem;
  text-decoration: none;
  font-weight: 500;
  color: #ffffff;
`;
const NavBarItems = styled.div``;
const NavBarLinks = styled(Link)`
  text-decoration: none;
  padding: 1rem;
  color: #ffffff;
`;
const Header = () => {
  return (
    <NavBar>
      <Logo to="/">Animals</Logo>
      <NavBarItems>
        <NavBarLinks to="/"> Home</NavBarLinks>
        <NavBarLinks to="/about"> About</NavBarLinks>
        <NavBarLinks to="/services"> Services</NavBarLinks>
      </NavBarItems>
    </NavBar>
  );
};

export default Header;
