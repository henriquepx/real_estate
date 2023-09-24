import styled from 'styled-components';
import logoHome from '../assets/bgmain.png';
import { useState } from 'react';
import { SlArrowDown } from 'react-icons/sl';

const MainContainer = styled.div`
    height: 100vh;
    background-color: #F5F5F5;
    position: relative;
`
const MainSize = styled.div`
    max-width: 1500px;
    width: 100%;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    padding-top: 5rem;
    h1 {
        color: var(--color-title);
        font-weight: 550;
        font-size: 4rem;
        max-width: 15ch;
        margin-top: 3rem;
    }
    p {
        color: var(--color-description);
        font-weight: 400;
        font-size: 1rem;
        max-width: 55ch;
        margin-top: 3rem;
    }

`
const TitlePage = styled.h2`
    color: var(--color-green);
        font-weight: 450;
        font-size: 1.3rem;
        text-transform: uppercase;
        margin-left: 1.5rem;
`
const ImgCasaMain = styled.img`
    position: absolute;
    z-index: 0;
    right: 0;
    bottom: 10%;
    width: 53%;
`
const DivTabsBuyRent = styled.div`
    position: relative;
`
const TabContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 2rem;
`;

const TabOption = styled.div`
  cursor: pointer;
  padding: 1rem;
  font-size: 1.3rem;
  color: ${({ active }) => (active ? 'var(--color-green)' : 'var(--color-title)')};
  background-color: ${({ active }) => (active ? '#FEFEFF' : 'transparent')};
`;

const ContentContainer = styled.div`
  position: absolute;
  top: 80px; 
  left: 0; 
  display: ${({ active }) => (active ? 'flex' : 'none')};
  justify-content: space-between;
  background-color: ${({ active }) => (active ? '#FEFEFF' : 'transparent')};
  box-shadow: ${({ active }) => (active ? 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;' : 'none')};
  width: 800px;
  z-index: 1; 
  padding: 2rem;
`;
const DropDownMain = styled.div`
    h2 {
        font-size: 1rem;
        color: #000;
    }
    div {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-top: .5rem;
        cursor: pointer;
    }
    h3 {
        color: #a8a8a8;
    }
`
const ButtonBuscar = styled.button`
    padding: 1.3rem 3rem;
    background-color: var(--color-green);
    color: #fff;
    cursor: pointer;
`

const Main = () => {

  const [activeTab, setActiveTab] = useState('Buy');

  const handleTabClick = (tab) => {
      setActiveTab(tab);
  };
    
  return (
      <MainContainer>
          <MainSize>
              <TitlePage>Real Estate</TitlePage>
              <h1>Let`s hunt for your dream residence</h1>
              <p>Explore our range of beautiful properties with the addition of separate accommodation suitable for you.</p>
              <DivTabsBuyRent>
                <TabContainer>
                    <TabOption active={activeTab === 'Buy'} onClick={() => handleTabClick('Buy')}>Buy</TabOption>
                    <TabOption active={activeTab === 'Rent'} onClick={() => handleTabClick('Rent')}>Rent</TabOption>
                </TabContainer>
                <ContentContainer active={activeTab === 'Buy'}>
                    <DropDownMain>
                          <h2>Location</h2>
                          <div>
                              <h3>Rio de Janeiro, RJ</h3>
                              <SlArrowDown />
                          </div>
                      </DropDownMain>
                      <DropDownMain>
                          <h2>Type</h2>
                          <div>
                              <h3>Home</h3>
                              <SlArrowDown />
                          </div>
                    </DropDownMain>
                    <DropDownMain>
                          <h2>Price Range</h2>
                          <div>
                              <h3>$200-$350</h3>
                              <SlArrowDown />
                          </div>
                      </DropDownMain>
                      <ButtonBuscar>Search</ButtonBuscar>
                </ContentContainer>
                <ContentContainer active={activeTab === 'Rent'}>
                <DropDownMain>
                          <h2>Location</h2>
                          <div>
                              <h3>Rio de Janeiro, RJ</h3>
                              <SlArrowDown />
                          </div>
                      </DropDownMain>
                      <DropDownMain>
                          <h2>Type</h2>
                          <div>
                              <h3>Home</h3>
                              <SlArrowDown />
                          </div>
                    </DropDownMain>
                    <DropDownMain>
                          <h2>Price Range</h2>
                          <div>
                              <h3>$200-$350</h3>
                              <SlArrowDown />
                          </div>
                      </DropDownMain>
                      <ButtonBuscar>Search</ButtonBuscar>
                </ContentContainer>
              </DivTabsBuyRent>
              <ImgCasaMain src={logoHome} alt="Casa de fundo" />
          </MainSize>
    </MainContainer>
  )
}

export default Main