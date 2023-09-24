import styled from 'styled-components';
import DetailsAdvent from '../components/DetailsAdvent';
import heart from '../assets/heart.png';
import security from '../assets/security.png';
import location from '../assets/location.png';
import ticket from '../assets/ticket.png';
import graph from '../assets/graph.png';
import star from '../assets/star.png';

const AdventContainer = styled.div`
    height: 80vh;
    background-color: #F5F5F5;
    @media (max-width: 1024px) {
        height: 100%;
        padding: 3rem 1rem;
    }
`
const TitleAdvent = styled.h1`
    color: var(--color-title);
    font-weight: 550;
    max-width: 15ch;
    font-size: 3rem;
    margin: 3rem 0rem 2rem 0rem;
    @media (max-width: 500px) {
        text-align: center;
    }
`
const SubtitleAdvent = styled.h2`
    color: var(--color-green);
    font-weight: 450;
    font-size: 1.3rem;
    text-transform: uppercase;
    margin-left: 1.5rem;
    @media (max-width: 500px) {
        text-align: center;
    }
`
const AdventSize = styled.div`
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    padding-top: 5rem;
`
const WrapAdvents = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 50px;
    margin-left: 2rem;
    @media (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 500px) {
        grid-template-columns: 1fr;
    }
`

const Advent = () => {
  return (
    <AdventContainer>
          <AdventSize>
              <SubtitleAdvent>Our advent</SubtitleAdvent>
              <TitleAdvent>Giving you peace of mind</TitleAdvent>
              <WrapAdvents>
                  <DetailsAdvent
                      imgadvent={heart}
                      altadvent='Símbolo de coração'
                      titleadvent='Comfortable'
                      descadvent='Enjoy lifestyle amenities designed to provide every homeowners modern comfort, a stones throw away from schools, churches, and hospitals.'
                  />
                  <DetailsAdvent
                      imgadvent={security}
                      altadvent='Símbolo de segurança'
                      titleadvent='Extra security'
                      descadvent='You can connect with potential tenants without having to share your phone number. We also require all users to register to validate their legitimacy.'
                  />
                  <DetailsAdvent
                      imgadvent={star}
                      altadvent='Símbolo de estrela'
                      titleadvent='Luxury'
                      descadvent='Find out how we provide the highest standard of professional property management to give you all the benefits of property.'
                  />
                  <DetailsAdvent
                      imgadvent={ticket}
                      altadvent='Símbolo de coração'
                      titleadvent='Best price'
                      descadvent='Not sure what you should be charging for your property? Let us do the numbers for you—contact us today for a free rental appraisal on your home.'
                  />
                  <DetailsAdvent
                      imgadvent={location}
                      altadvent='Símbolo de localização'
                      titleadvent='Strategic location'
                      descadvent='located in the city center close to the shopping center. Very good for areas surrounded by international education centers, start-up office centers.'
                  />
                  <DetailsAdvent
                      imgadvent={graph}
                      altadvent='Símbolo de gráfico'
                      titleadvent='Efficient'
                      descadvent='Schedule visits to multiple properties at once in one day without having to call them one by one. Check everything and find the best properties for rent'
                  />
              </WrapAdvents>
          </AdventSize>
    </AdventContainer>
  )
}

export default Advent