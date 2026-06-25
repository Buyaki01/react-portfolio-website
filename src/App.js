import { Header } from '../src/components/header/Header'
import { Nav } from '../src/components/nav/Nav'
import { Skills } from '../src/components/skills/Skills'
import { Projects } from '../src/components/projects/Projects'
import { Experience } from '../src/components/experience/Experience'
import { Contact } from '../src/components/contact/Contact'
import { Footer } from '../src/components/footer/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  )
}

export default App