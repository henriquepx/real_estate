import About from "./pages/About";
import Advent from "./pages/Advent";
import Discover from "./pages/Discover";
import Header from "./pages/Header";
import Main from "./pages/Main";
import Footer from "./pages/Footer";
import Testimonial from "./pages/Testimonial";
import GlobalStyle from "./styles/globalStyles";


function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <Discover />
      <Advent />
      <About />
      <Testimonial />
      <Footer />
    </>
  )
}

export default App
