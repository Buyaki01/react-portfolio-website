import { Header } from '../src/components/header/Header'
import { Nav } from '../src/components/nav/Nav'
import { About } from '../src/components/about/About'
import { Projects } from '../src/components/projects/Projects'
import { Contact } from '../src/components/contact/Contact'
import { Footer } from '../src/components/footer/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App