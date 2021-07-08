import React from 'react';
import styled from 'styled-components';
//import { Button } from './Button';
import { menuData } from '../data/MenuData';
import { Link } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';
const DropdownContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 40%;
  height: 100%;
  background: #cd853f; //older color
  //background: #2e2927;
  display: grid;
  align-items: center;
  top: 0;
  right: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font: 2rem;
  cursor: pointer;
  outline: none;
`;
const CloseIcon = styled(FaTimes)`
  color: #000d1a;
  height: 200%;
`;
const DropdownWrapper = styled.div``;
const DropdownMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  margin-bottom: 4rem;
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(4, 60px);
  }
`;
const DropdownLink = styled(Link)`
  display: flex;
  text-align: right;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &:hover {
    color: #000d1a;
  }
`;

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <DropdownContainer isOpen={isOpen} onClick={toggle}>
      {/* <h1>Raymond Nimalan</h1>
      <h1>Portfolio Website</h1> */}
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <DropdownWrapper>
        <DropdownMenu>
          {menuData.map((item, index) => (
            <DropdownLink
              to={item.link}
              key={index}
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={item.offset}
              onClick={toggle}
            >
              {item.title}
            </DropdownLink>
          ))}
        </DropdownMenu>
      </DropdownWrapper>
    </DropdownContainer>
  );
};

export default Dropdown;
