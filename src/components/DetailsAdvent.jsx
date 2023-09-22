import styled from 'styled-components';
import PropTypes from 'prop-types';


const DetailsAdventContainer = styled.div`
    h2 {
        color: var(--color-title);
        font-weight: 550;
        max-width: 15ch;
        font-size: 2rem;
    }
    p {
        max-width: 35ch;
        color: #aaaaaa;
    }
`

const DetailsAdvent = ({ imgadvent, altadvent, titleadvent, descadvent }) => {
  return (
      <DetailsAdventContainer>
          <img src={imgadvent} alt={altadvent} />
          <h2>{titleadvent}</h2>
          <p>{descadvent}</p>
    </DetailsAdventContainer>
  )
}

DetailsAdvent.propTypes = {
    imgadvent: PropTypes.string.isRequired,
    altadvent: PropTypes.string.isRequired,
    titleadvent: PropTypes.string.isRequired,
    descadvent: PropTypes.string.isRequired,
};
  
export default DetailsAdvent