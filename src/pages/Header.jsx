import styled from 'styled-components';
import logo from '../assets/logo.png';
import { useState } from 'react';
import MenuLateral from '../components/MenuLateral';

const HeaderP = styled.header `
    background-color: #F5F5F5;
`
const HeaderContainer = styled.div`
    max-width: 1500px;
    width: 100%;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1rem 1.5rem;
    @media (max-width: 1000px) {
      padding: 1rem 1.5rem;
  }
`
const NavHeaderPrincipal = styled.nav`
  @media (max-width: 1000px) {
    display: none;
  }
`
const UlHeader = styled.ul`
    display: flex;
    gap: 30px;
`
const LiHeader = styled.li`
    a {
        font-size: 1.1rem;
        color: #646464;
        font-weight: 400;
        &:visited {
            color: #616161; 
        }
    }
`
const DivHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 35px;
    a {
        font-size: 1.1rem;
        color: var(--color-green);
        font-weight: 400;
        cursor: pointer;
    }
    @media (max-width: 1000px) {
      display: none;
  }
`
const LinkHeaderLogin = styled.a`
    padding: 1rem 3rem;
    background-color: #4ca484;
    color: #eeeeee;
    cursor: pointer;
    &:visited {
        color: #fff; 
    }
`
const MenuHamburger = styled.div`
  cursor: pointer;
  display: none;
  padding: 3px 5px 0px 5px;
  border-radius: 10px;
  z-index: 999;
  @media (max-width: 1000px) {
    display: block;
    position: absolute;
    right: 4%;
  }
  span {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto 0px auto;
    transition: all 0.3s ease-in-out;
    background-color: #4ca484;
    &:nth-child(1) {
      transform: translateY(${props => (props.open ? '8px' : '0')}) rotate(${props => (props.open ? '45deg' : '0')});
    }
    &:nth-child(2) {
      opacity: ${props => (props.open ? '0' : '1')};
    }
    &:nth-child(3) {
      transform: translateY(${props => (props.open ? '-8px' : '0')}) rotate(${props => (props.open ? '-45deg' : '0')});
    }
  }
  
`;

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
    
  return (
      <HeaderP>
          <HeaderContainer>
              <img src={logo} alt="Logo" />
              <NavHeaderPrincipal>
                  <UlHeader>
                    <LiHeader><a href="#">Home</a></LiHeader>
                    <LiHeader><a href="#">Property</a></LiHeader>
                    <LiHeader><a href="#">About</a></LiHeader>
                    <LiHeader><a href="#">Service</a></LiHeader>
                    <LiHeader><a href="#">Contact</a></LiHeader>
                  </UlHeader> 
              </NavHeaderPrincipal>
              <DivHeader>
                  <a href="#">Sign up</a>
                  <LinkHeaderLogin href="#">Login</LinkHeaderLogin>
              </DivHeader>
              <MenuHamburger open={isOpen} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
              </MenuHamburger>
              <MenuLateral isOpen={isOpen} onClose={closeMenu} />
          </HeaderContainer>
    </HeaderP>
  )
}

export default Header