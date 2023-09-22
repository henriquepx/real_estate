import About from "./pages/About"
import Advent from "./pages/Advent"
import Discover from "./pages/Discover"
import Header from "./pages/Header"
import Main from "./pages/Main"
import Testimonial from "./pages/Testimonial"
import GlobalStyle from "./styles/globalStyles"

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
    </>
  )
}

export default App
