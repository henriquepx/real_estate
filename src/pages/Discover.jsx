import styled from 'styled-components';
import { SlArrowRight } from 'react-icons/sl';
import House from '../components/House';
import home1 from '../assets/home1.png';
import home2 from '../assets/home2.png';
import home3 from '../assets/home3.png';

const DiscoverContainer = styled.div`
    height: 100%;
    background-color: #fff;
    padding: 5rem 0rem;
`
const TitleDiscover = styled.h1`
    color: var(--color-title);
    font-weight: 550;
    font-size: 3rem;
    margin: 3rem 0rem 2rem 0rem;
    @media (max-width: 500px) {
        text-align: center;
        font-size: 2rem;
    }
`
const SubtitleDiscover = styled.h2`
    color: var(--color-green);
    font-weight: 450;
    font-size: 1.3rem;
    text-transform: uppercase;
    margin-left: 1.5rem;
    @media (max-width: 500px) {
        text-align: center;
    }
`
const DiscoverSize = styled.div`
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    @media (max-width: 1440px) {
        padding:  0rem 1.2rem;
    }
`
const TextDiscover = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 1024px) {
        flex-direction: column;
        justify-content: flex-start;
    }
`
const LearnMore = styled.a`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 1rem;
    cursor: pointer;
    width: 123px;

    font-weight: 500;
    position: relative;
    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        border-radius: 4px;
        background-color: var(--color-green);
        bottom: -3px;
        left: 0;
        transform: scaleX(0);
        transition: .4s ease-in-out;
    }
        &:hover::before {
        transform-origin: left;
        transform: scaleX(1);
    }

    @media (max-width: 670px) {
        margin-bottom: 3rem;
    }
    p {
        color: var(--color-green);
        font-weight: 500;
        text-align: center;
    }
`
const IconContainer = styled.div`
  background-color: var(--color-green); 
  width: 20px; 
  height: 20px; 
  border-radius: 50%; 
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WhiteIcon = styled(SlArrowRight)`
  color: #fff; 
  font-size: .5rem;
`;
const HomeContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 50px;
    overflow-x: scroll;
    scrollbar-width: thin;
    scrollbar-color: #000;
    margin-top: 3rem;
    max-width: 100%;
`

const Discover = () => {
    
  return (
      <DiscoverContainer>
          <DiscoverSize>
              <SubtitleDiscover>Discover</SubtitleDiscover>
              <TitleDiscover>Best recommendation</TitleDiscover>
              <TextDiscover>
                  <p>Discover our exclusive selection of the finest one-of-a-kind luxury properties architectural masterpieces.</p>
                  <LearnMore>
                      <p href="#">Learn more</p>
                      <IconContainer>
                        <WhiteIcon />
                      </IconContainer>
                  </LearnMore>
              </TextDiscover>
              <HomeContainer>
                  <House
                      img={home1}
                      title='Perum griya asri'
                      alt='Imagem da primeira casa'
                      location='Bogor, Jawa Barat'
                      price='$25,000'
                      size='360m² Living area'
                  />
                  <House
                      img={home2}
                      title='Perum kencana asri'
                      alt='Imagem da primeira casa'
                      location='Bogor, Jawa Barat'
                      price='$35,000'
                      size='360m² Living area'
                  />
                  <House
                      img={home3}
                      title='Perum rakjel elit'
                      alt='Imagem da primeira casa'
                      location='Bogor, Jawa Barat'
                      price='$40,000'
                      size='360m² Living area'
                  />
                  <House
                      img={home1}
                      title='Perum griya asri'
                      alt='Imagem da primeira casa'
                      location='Bogor, Jawa Barat'
                      price='$25,000'
                      size='360m² Living area'
                  />
                  <House
                      img={home2}
                      title='Perum griya asri'
                      alt='Imagem da primeira casa'
                      location='Bogor, Jawa Barat'
                      price='$25,000'
                      size='360m² Living area'
                  />
                  <House
                      img={home3}
                      title='Perum griya asri'
                      alt='Imagem da primeira casa'
                      location='Bogor, Jawa Barat'
                      price='$25,000'
                      size='360m² Living area'
                  />
                  <House
                      img={home1}
                      title='Perum griya asri'
                      alt='Imagem da primeira casa'
                      location='Bogor, Jawa Barat'
                      price='$25,000'
                      size='360m² Living area'
                  />
                  
              </HomeContainer>
          </DiscoverSize>
    </DiscoverContainer>
  )
}

export default Discover