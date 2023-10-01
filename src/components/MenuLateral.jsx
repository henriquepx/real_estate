import styled from 'styled-components';
import PropTypes from 'prop-types';

const ContainerMenuLateral = styled.div`
  position: fixed;
  top: 0;
  left: ${props => (props.isOpen ? '0' : '-100%')};
  width: 100%;
  height: 100%;
  background-color: #fff;
  transition: left 0.4s ease-in-out;
  z-index: 998;
`

const MenuLateral= ({ isOpen, onClose }) => {
  return (
      <ContainerMenuLateral isOpen={isOpen}>
          <button onClick={onClose}>Fechar</button>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
    </ContainerMenuLateral>
  )
}

MenuLateral.propTypes = {
    isOpen: PropTypes.bool.isRequired, // isOpen should be a boolean and is required
    onClose: PropTypes.func.isRequired, // onClose should be a function and is required
  }

export default MenuLateral