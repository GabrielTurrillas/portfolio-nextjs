import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import styled from 'styled-components';
import Link from 'next/link';
import { Link as LinkS } from 'react-scroll';
import { GlobalStyles, colors } from '../../styles';
import { Switch } from '..';


const Navbar = ({ toggle, english, toggleSwitch }) => {
  const [scrollNav, setScrollNav] = useState(false)
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
      <GlobalStyles />
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <Link href='/' passHref>
            <NavLogo onClick={toggleHome}>Gabriel Turrillas</NavLogo>
          </Link>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <SwitchContainer>
              <SwitchLabel>English</SwitchLabel>
              <Switch isToggled={english} onToggle={toggleSwitch} />
            </SwitchContainer>
            <NavItem>
              <NavLinks
                to="works"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
              >
                {english ? 'Works' : 'Proyectos'}
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="habilities"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
              >
                {english ? 'Habilities' : 'Habilidades'}
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="technologies"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
              >
                {english ? 'Technologies' : 'Tecnologias'}
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;



export const Nav = styled.nav`
  background:${colors.background};
  height:80px;
  width: 100%;
  margin-top: -80px;
  display: flex;
  justify-content:center;
  align-items:center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 1000;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display:flex;
  background:000;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 100%;
`;

export const NavLogo = styled.a`
  color: #fff;
  margin-left:50px;
  font-family:'Didact Gothic', sans-serif;
  justify-self: flex-start;
  cursor: pointer;
  padding:0;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  @media screen and (max-width: 480px) {
    display: none
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 1090px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items:right;
  list-style:none;
  
  @media screen and (max-width: 1090px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height :80px;
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  font-weight: bold;
  cursor: pointer;
  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  @media screen and (max-width: 1090px) {
    display: none;
  }
`

/* export const NavBtnLink = styled(LinkR)`
  border-radius:50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  font-weight:bold;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition:all 0.2s ease-in-out;
    background:#fff;
    color: #010606;
  }
` */

export const SwitchContainer = styled.div`
  display:flex;
  align-items: center;
`

export const SwitchLabel = styled.label`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  font-weight: bold;
`