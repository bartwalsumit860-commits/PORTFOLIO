import { ThemeProvider } from './context/ThemeContext'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certificate from './components/Certificate'
import Contacts from './components/Contacts'
import Footer from './components/Footer'

const App = () => {
  return (
    <ThemeProvider>
      <div className='bg-page min-h-screen'>
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certificate />
          <Contacts />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
