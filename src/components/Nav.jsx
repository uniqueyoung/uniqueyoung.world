import { useState, useEffect } from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import logoLight from '../assets/logo.light.png';
import logoDark from '../assets/logo.dark.png';

const items = ["about", "programs", "reviews"];

const NavigationWrapper = styled.nav`
  box-sizing: border-box;
  width: 100vw;
  background-color: ${(props) => props.backgroundColor};
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;

  position: ${(props) => props.isSticky ? "fixed" : "absolute"};
  z-index: ${(props) => props.isSticky ? "999" : "unset"}; 
  top:  ${(props) => props.isSticky ? "0" : "unset"};
  opacity:${(props) => props.isSticky ? "0.95" : "unset"};


  @media (min-width: 700px) {
    height: 6rem;
    padding: 1rem;
  }
`


const NavUl = styled.ul`
  font-family: 'Be Vietnam Pro', sans-serif;
  padding: 0;
  display: ${(props) => props.isCollapsed ? 'flex' : 'none'};

  @media(min-width: 700px) {
    text-align: right;
    display: flex;
    flex-direction: row;
    margin-right: 1rem;
  }
`

const LogoLink = styled(Link)`
  `

const LogoImg = styled.img`
  padding: 0.8rem;
  width: 6rem;
  height: 6rem;
  float: left;
`

const ListItem = styled.li`
  text-transform: capitalize;
  list-style: none;
  margin-bottom: 0;
  margin-right: 0.5rem;
  color: ${(props) => props.fontColor};
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;

  @media(min-width: 400px) {
  margin-right: 1rem;

  }
  @media(min-width: 700px) {
    margin-left: 1rem;
    margin-right: 0;
    font-weight: 700;
  }
`

const HamburgerWrapper = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  margin-right: 1rem;
  z-index: 10;

  @media(min-width: 700px) {
    display: none;
  }
`

const Burger = styled.div`
  width: 2rem;
  height: 0.25rem;
  border-radius: 2px;
  background-color: ${(props) => props.fontColor};
  transform-origin: 1px;
  transition: all 0.3s linear;
`

const Hamburger = ({ fontColor, isCollapsed, setIsCollapsed }) => {
  function toggle() {
    const curr = isCollapsed;
    const toggleValue = !curr;
    setIsCollapsed(toggleValue)
  }

  return (
    <HamburgerWrapper onClick={toggle}>
      <Burger fontColor={fontColor} />
      <Burger fontColor={fontColor} />
      <Burger fontColor={fontColor} />
    </HamburgerWrapper>
  )
}
const Navigation = ({ isColoredPage, backgroundColor, isProgram }) => {
  const [isTop, setIsTop] = useState(true);
  const [isSticky, setIsSticky] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 80) {
      setIsTop(false);
      setIsSticky(true);
    } else {
      setIsTop(true);
      setIsSticky(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [isTop])

  const navColor = backgroundColor ? backgroundColor : isTop ? 'transparent' : "#f3f3f3";
  const logo = isColoredPage && isTop ? logoLight : isProgram ? logoLight : logoDark;
  const fontColor = isColoredPage && isTop ? '#f3f3f3' : isProgram ? '#f3f3f3' : "#242424"

  const NavigationItems = items.map(item => {
    const href = `/${item} `;
    return (
      <ListItem key={item} fontColor={fontColor}>
        <Link to={href}>{item}</Link>
      </ListItem>
    )
  });


  return (
    <NavigationWrapper backgroundColor={navColor} isSticky={isSticky}>
      <LogoLink to="/">
        <LogoImg src={logo} />
      </LogoLink>
      <NavUl color={fontColor} isCollapsed={isCollapsed}>
        {NavigationItems}
      </NavUl>
      <Hamburger fontColor={fontColor} isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
    </NavigationWrapper >
  )
}

export default Navigation;



