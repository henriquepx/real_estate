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
`

const MenuLateral= ({ isOpen }) => {
  return (
      <ContainerMenuLateral isOpen={isOpen}>
            <h1>Menu</h1>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
    </ContainerMenuLateral>
  )
}

MenuLateral.propTypes = {
    isOpen: PropTypes.bool.isRequired, 
  }

export default MenuLateral