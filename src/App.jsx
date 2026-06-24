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
    <div className='bg-[#0a0a0b] h-full'>
      <Header/>
      <main>
          <Hero/>
          <About/>
          <Skills/>
          <Projects/>
          <Certificate/>
          <Contacts/>
      </main>
      <Footer/>
    
    </div>
  )
}

export default App