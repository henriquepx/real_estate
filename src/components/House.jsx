import styled from 'styled-components';
import PropTypes from 'prop-types';

const HouseContainer = styled.div`
    padding: 1rem;
    border: 1px solid #e6e6e6;

    display: flex;
    flex-direction: column;
    gap: 10px;
`
const TitleHouse = styled.h1`
    font-size: 1.5rem;
    color: var(--color-title);
    font-weight: 600;
`
const DescriptionHouse = styled.p`
    color: #aaaaaa;
`
const PriceContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
    h2 {
        font-size: 1.4rem;
        font-weight: 600;
        color: var(--color-green);
    }
`
const ButtonSendHouse = styled.a`
    background-color: var(--color-green);
    width: 100%;
    padding: .7rem 1rem;
    text-align: center;
    color: #fff;
`

const House = ({img, title, alt, location, price, size}) => {
  return (
    <HouseContainer>
          <img src={img} alt={alt} />
          <TitleHouse>{title}</TitleHouse>
          <DescriptionHouse>{location}</DescriptionHouse>
          <PriceContainer>
              <h2>{price}</h2>
              <p>{size}</p>
          </PriceContainer>
          <ButtonSendHouse href="#">Send Inquiry</ButtonSendHouse>
    </HouseContainer>
  )
}

House.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
  };

export default House