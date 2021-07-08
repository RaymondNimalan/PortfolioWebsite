import React from 'react';
import styled, { css } from 'styled-components/macro';
import { menuData } from '../data/MenuData';
import { CgMenuRound } from 'react-icons/cg';
import { animateScroll, Link } from 'react-scroll';

const Nav = styled.div`
  /* height: 100%; //sidebar
  width: 150px; //sidebar */
  height: 60px;
  background: #000;
  display: flex;
  justify-content: center;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
`;

const NavLink = css`
  color: white;
  display: flex;
  display: inline-grid;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    transform: translateY(-2px);
    color: #b44d2e;
    font-size: 120%;
  }
`;

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
      color: #b44d2e;
    }
  }
`;

const NavMenu = styled.div`
  display: inline-flex;
  align-items: center;
  text-align: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}
`;

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      {/* <Logo to='/' onClick={toggleHome}>
        Portfolio
      </Logo> */}
      <MenuBars onClick={toggle} />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks
            to={item.link}
            key={index}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={item.offset}
          >
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
