import styled from 'styled-components';
import quote from '../assets/quote.png';
import PropTypes from 'prop-types';

const AvalationContainer = styled.div`
    padding: 1.5rem 1.3rem 1.3rem 1.3rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    h2 {
        margin: 1.5rem 0rem 1rem 0rem;
        color: var(--color-title);
        font-weight: 650;
        font-size: 1.2rem;
        max-width: 30ch;
    }
    p {
        margin-bottom: 1.1rem;
    }
`
const DivTextAvaliation = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    div {
        h1 {
            color: var(--color-title);
            font-weight: 500;
        }
    }
`

const Avaliation = ({title, message, img, altimg, name, work}) => {
  return (
      <AvalationContainer>
          <img src={quote} alt="Aspas" />
          <h2>{title}</h2>
          <p>{message}</p>
          <DivTextAvaliation>
              <img src={img} alt={altimg} />
              <div>
                  <h1>{name}</h1>
                  <h3>{work}</h3>
              </div>
          </DivTextAvaliation>
    </AvalationContainer>
  )
}

Avaliation.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  altimg: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  work: PropTypes.string.isRequired,
};

export default Avaliation