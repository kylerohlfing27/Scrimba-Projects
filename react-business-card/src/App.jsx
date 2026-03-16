import './App.css'
import ProfilePic from './components/ProfilePic'
import About from './components/About'
import Skills from './components/Skills'
import Interests from './components/Interests'
import Footer from './components/Footer'
import Information from './components/Information'

function App() {
  return (
    <>
      <div className="app">
        <ProfilePic />
        <Information />
        <About />
        <Skills />
        <Interests />
        <Footer />
      </div>
    </>
  )
}

export default App
