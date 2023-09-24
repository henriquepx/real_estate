import styled from 'styled-components';
import imghouse from '../assets/bgabout.png';
import okaysimbol from '../assets/ok.png';
import starmini from '../assets/starmini.png';

const AboutContainer = styled.div`
    height: 100%;
    padding: 10rem 0rem 5rem 0rem;
    background-color: #fff;
`
const AboutSize = styled.div`
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
    
    display: flex;
    align-items: center;
    gap: 50px;

    @media (max-width: 1024px) {
        flex-direction: column;
        padding: 0rem 1.2rem;
    }
`
const TitleAbout = styled.h1`
    color: var(--color-title);
    font-weight: 550;
    max-width: 20ch;
    font-size: 3rem;
    margin: 3rem 0rem 2rem 0rem;
`
const SubtitleAbout = styled.h2`
    color: var(--color-green);
    font-weight: 450;
    font-size: 1.3rem;
    text-transform: uppercase;
    margin-left: 1.5rem;
`
const TextAbout = styled.div`
    p {
        color: var(--color-description);
        max-width: 50ch;
        margin-bottom: 2.5rem;
    }
`
const ButtonAbout = styled.a`
    background-color: var(--color-green);
    width: 100%;
    padding: 1rem 2rem;
    text-align: center;
    color: #fff;
`
const ImgHouseAbout = styled.div`
    position: relative;
`
const FaixaAbou1 = styled.div`
    position: absolute;
    top: -20%;
    left: 15%;
    background-color: #fff;
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
        font-size: 3rem;
        color: var(--color-title);
    }
    div {
        display: flex;
        gap: 5px;
    }
    h3 {
        color: var(--color-description);
        font-size: .9rem;
        margin-top: .8rem;
    }
    h4 {
        color: var(--color-tite);
    }
`
const FaixaAbou2 = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: #fff;
    padding: 1rem 4rem 1rem 2rem;
    display: flex;
    align-items: center;
    gap: 60px;
    div {
        display: flex;
        align-items: center;
        gap: 5px;
        h2 {
            font-size: 3rem;
            color: var(--color-title);
            font-weight: 600;
        }
        p {
            max-width: 5ch;
            font-size: .8rem;
            color: var(--color-description);
        }
    }
`

const About = () => {
  return (
      <AboutContainer>
          <AboutSize>
              <ImgHouseAbout>
                  <img src={imghouse} alt="Imagem da casa" />
                  <FaixaAbou1>
                      <img src={okaysimbol} alt="Símbolo de Ok" />
                      <p>4.8</p>
                      <div>
                          <img src={starmini} alt="Estrelas representando avaliação" />
                          <img src={starmini} alt="Estrelas representando avaliação" />
                          <img src={starmini} alt="Estrelas representando avaliação" />
                          <img src={starmini} alt="Estrelas representando avaliação" />
                          <img src={starmini} alt="Estrelas representando avaliação" />
                      </div>
                      <h3>Trusted on</h3>
                      <h4>500+ Reviews</h4>
                  </FaixaAbou1>
                  <FaixaAbou2>
                      <div>
                          <h2>250+</h2>
                          <p>Property Sale</p>
                      </div>
                      <div>
                          <h2>550+</h2>
                          <p>Apartament Rent</p>
                      </div>
                  </FaixaAbou2>
              </ImgHouseAbout>
              <TextAbout>
                <SubtitleAbout>About us</SubtitleAbout>
                <TitleAbout>How much is your property worth now?</TitleAbout>
                <p>We have built our reputation as true local area experts. We have gained more knowledge about buyer interests, our neighborhood and the market than any other brand because we live locally and work for local people.</p>
                <ButtonAbout href="#">Learn more</ButtonAbout>
              </TextAbout>
        </AboutSize>
    </AboutContainer>
  )
}

export default About