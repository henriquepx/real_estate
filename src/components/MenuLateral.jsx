import styled from 'styled-components';
import PropTypes from 'prop-types';

const ContainerMenuLateral = styled.div`
  position: fixed;
  top: 0;
  left: ${props => (props.isOpen ? '0' : '-100%')};
  width: 100%;
  height: 100%;
  background-color: #F5F5F5;
  transition: left 0.4s ease-in-out;
  z-index: 998;
  padding: 1.5rem 2rem;
  h1 {
    font-size: 2rem;
    color: var(--color-green);
    margin-bottom: 2rem;
  }
  @media (min-width: 1000px) {
    display: none;
  }
`
const NavLateral = styled.nav`
  ul {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding-bottom: 2rem;
    li {
      a {
        font-size: 1.2rem;
        color: var(--color-title);
        font-weight: 500;
      }
    }
  }
`
const DivLoginLateral = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  padding-top: 2rem;
  border-top: 1px solid #d6d6d6;
  font-size: 1.1rem;
  color: var(--color-green);
  font-weight: 400;
  cursor: pointer;
  a {
    padding: 1rem 3rem;
    background-color: #4ca484;
    color: #eeeeee;
    cursor: pointer;
    &:visited {
        color: #fff; 
    }
  }
`

const MenuLateral= ({ isOpen }) => {
  return (
      <ContainerMenuLateral isOpen={isOpen}>
            <h1>Menu</h1>
            <NavLateral>
              <ul>
                <li><a href="#">Property</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Service</a></li>
                <li><a href="#">Contact</a></li>
        </ul>
        <DivLoginLateral>
          <p>Sign up</p>
          <a href="#">Login</a>
        </DivLoginLateral>
            </NavLateral>
    </ContainerMenuLateral>
  )
}

MenuLateral.propTypes = {
    isOpen: PropTypes.bool.isRequired, 
  }

export default MenuLateral