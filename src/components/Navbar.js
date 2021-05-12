import React from 'react';
import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { menuData } from '../data/MenuData';
import { Button } from './Button';
//import image from '../images/';  //for importing own svg or image from nav bar icon
import { CgMenuRound } from 'react-icons/cg'; //for importing from react icons

const Nav = styled.nav`
  height: 60px;
  background: #000;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
`;

const NavLink = css`
  color: white;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    transform: translateY(-2px);
    color: red;
    font-size: 120%;
  }
`;
const Logo = styled(Link)`
  ${NavLink}
  font-style: italic;
  color: #fff;
`;

// const MenuBars = styled.i`  //.i is for icons
//   display: none;
//   @media screen and (max-width: 768px) {
//      display: none;
//    }

// `;

const MenuBars = styled(CgMenuRound)`
  //for using nav bar icon from react icons
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    //background-image: url(${CgMenuRound}); //for svg
    //background-size: contain;         // for svg
    height: 40px;
    width: 40px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);
    color: white;
    &:hover {
      color: red;
      /* height: 50px;
      width: 50px; */
    }
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <Logo to='/'>Portfolio</Logo>
      <MenuBars onClick={toggle} />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
        <Button to='/contact' primary='true'>
          Contact Me
        </Button>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;