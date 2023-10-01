import styled from 'styled-components';
import { SlArrowRight } from 'react-icons/sl';
import Avaliation from '../components/Avaliation';
import person1 from '../assets/person1.png';
import person2 from '../assets/person2.png';
import person3 from '../assets/person3.png';


const TestimonialContaner = styled.div`
    background-color: #fff;
    padding: 5rem 0rem 10rem 0rem;
`
const TestimonialSize = styled.div`
    max-width: 1500px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: 1440px) {
        padding: 0rem 1.2rem;
    }
`
const TitleTestimonial = styled.h1`
    color: var(--color-title);
    font-weight: 550;
    font-size: 3rem;
    margin: 3rem 0rem 2rem 0rem;
    @media (max-width: 670px) {
        margin: 3rem 0rem 0rem 0rem;
    }
`
const SubtitleTestimonial = styled.h2`
    color: var(--color-green);
    font-weight: 450;
    font-size: 1.3rem;
    text-transform: uppercase;
    margin-left: 1.5rem;
`
const TextDiscover = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 670px) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: initial;
    }
`
const LearnMore = styled.a`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 1rem;
    cursor: pointer;
    width: 125px;
    height: 20px;

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
const ContainerCommentary = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 50px;
    @media (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 500px) {
        grid-template-columns: 1fr;
    }
`

const Testimonial = () => {
  return (
      <TestimonialContaner>
          <TestimonialSize>
                <SubtitleTestimonial>Costumer Testimonial</SubtitleTestimonial>
                <TextDiscover>
                  <TitleTestimonial>Peopel say about us?</TitleTestimonial>
                  <LearnMore>
                      <p href="#">Learn more</p>
                      <IconContainer>
                        <WhiteIcon />
                      </IconContainer>
                  </LearnMore>  
              </TextDiscover>  
              <ContainerCommentary>
                  <Avaliation
                      title='It proved to be exactly the kind of home we wanted.'
                      message='We wish to express our thanks for your hard work in finding us a temporary home, which proved to be exactly what we wanted.'
                      img={person1}
                      altimg='Pessoa 1 da sessão de comentários'
                      name='Jaydon Aminoff'
                      work='UX Designer'
                  />
                  <Avaliation
                      title='Nobody knows Portland and the peninsula better than David.'
                      message='My wife and I had a dream of downsizing from our house in Cape Elizabeth into a small condo closer to where we work and play in Portland. '
                      img={person2}
                      altimg='Pessoa 2 da sessão de comentários'
                      name='Alfredo Donin'
                      work='UI Designer'
                  />
                  <Avaliation
                      title='He keeps his clients best interests in sharp focus'
                      message='After working with David to sell my home in 2013, I was convinced that he’s the only realtor I’ll ever need. Since then, I’ve bought two properties and sold one.'
                      img={person3}
                      altimg='Pessoa 3 da sessão de comentários'
                      name='Makenna Korsgaard'
                      work='UX Researcher'
                  />
                  
              </ContainerCommentary>
          </TestimonialSize>
    </TestimonialContaner>
  )
}

export default Testimonial