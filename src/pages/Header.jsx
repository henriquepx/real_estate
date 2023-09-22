import styled from 'styled-components';
import logo from '../assets/logo.png';

const HeaderContainer = styled.div`
    max-width: 1300px;
    width: 100%;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1rem 0;
`
const UlHeader = styled.ul`
    display: flex;
    gap: 30px;
`
const LiHeader = styled.li`
    a {
        font-size: 1.1rem;
        color: #646464;
        &:visited {
            color: #616161; 
        }
    }
`
const DivHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 35px;
    a {
        font-size: 1.1rem;
        color: #363636;
        &:visited {
            color: #363636; 
        }
    }
`
const LinkHeaderLogin = styled.a`
    padding: 1rem 3rem;
    background-color: #4ca484;
    color: #fff;
`

const Header = () => {
  return (
      <header>
          <HeaderContainer>
              <img src={logo} alt="Logo" />
              <nav>
                  <UlHeader>
                    <LiHeader><a href="#">Home</a></LiHeader>
                    <LiHeader><a href="#">Property</a></LiHeader>
                    <LiHeader><a href="#">About</a></LiHeader>
                    <LiHeader><a href="#">Service</a></LiHeader>
                    <LiHeader><a href="#">Contact</a></LiHeader>
                  </UlHeader> 
              </nav>
              <DivHeader>
                  <a href="#">Sign up</a>
                  <LinkHeaderLogin href="#">Login</LinkHeaderLogin>
              </DivHeader>
          </HeaderContainer>
    </header>
  )
}

export default Header