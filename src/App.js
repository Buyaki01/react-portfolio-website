import { Header } from '../src/components/header/Header'
import { Nav } from '../src/components/nav/Nav'
import { Skills } from '../src/components/skills/Skills'
import { Experience } from '../src/components/experience/Experience'
import { Contact } from '../src/components/contact/Contact'
import { Footer } from '../src/components/footer/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </>
  )
}

export default App