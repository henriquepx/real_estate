import styled from 'styled-components';
import logo from '../assets/logo.png';
import { BsInstagram, BsFacebook, BsWhatsapp } from 'react-icons/bs'

const FooterContainer = styled.div`
    background-color: #F5F5F5;
`
const FooterSize = styled.div`
    max-width: 1500px;
    width: 100%;
    margin: 0 auto;

    padding: 7rem 3rem;

    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
`
const DivFooter1 = styled.div`
    img {
        margin-bottom: .6rem;
    }
    p {
        color: var(--color-title);
        max-width: 35ch;
        margin-bottom: 1rem;
    }
    h3 {
        color: var(--color-title);
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: .7rem;
    }
    div {
        input {
            padding: .7rem 1rem;
        }
        button {
            padding: .7rem 2rem;
            text-align: center;
            background-color: var(--color-green);
            color: #fff;
            cursor: pointer;
        }
    }
`
const DivFooterCenter = styled.div`
    h2 {
        color: var(--color-title);
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: .6rem;
    }
    nav {
        ul {
            li {
                margin-top: .7rem;
                a {
                    color: var(--color-description);
                }
            }
        }
    }
`
const DivFooterMidias = styled.div`
    h2 {
        color: var(--color-title);
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: .6rem;
    }
    div {
        display: flex;
        gap: 25px;
        a {
            font-size: 1.5rem;
            color: var(--color-green);
        }
    }
`

const Footer = () => {
  return (
      <FooterContainer>
          <FooterSize>
              <DivFooter1>
                  <img src={logo} alt="Logo da empresa" />
                  <p>We have built our reputation as true local area experts.</p>
                  <h3>Newsletter</h3>
                  <div>
                      <input type="email" placeholder='Write your e-mail' />
                      <button>Send</button>
                  </div>
              </DivFooter1>
              <DivFooterCenter>
                  <h2>Services</h2>
                  <nav>
                      <ul>
                          <li><a href="#">About us</a></li>
                          <li><a href="#">Careers</a></li>
                          <li><a href="#">Terms & Conditions</a></li>
                          <li><a href="#">Privacy & Policy</a></li>
                      </ul>
                  </nav>
              </DivFooterCenter>
              <DivFooterCenter>
                  <h2>Community</h2>
                  <nav>
                      <ul>
                          <li><a href="#">Find agents</a></li>
                          <li><a href="#">Lifestyle</a></li>
                          <li><a href="#">Legal notice</a></li>
                      </ul>
                  </nav>
              </DivFooterCenter>
              <DivFooterMidias>
                  <h2>Follow us on:</h2>
                  <div>
                      <a href="#"><BsInstagram /></a>
                      <a href="#"><BsFacebook /></a>
                      <a href="#"><BsWhatsapp /></a>
                  </div>
              </DivFooterMidias>
          </FooterSize>
    </FooterContainer>
  )
}

export default Footer;