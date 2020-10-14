import React from 'react'
import About from '../components/aboutComponent/About'
import Contact from '../components/contactComponent/Contact'
import Footer from '../components/footerComponent/Footer'
import Header from '../components/Header/Header'
import Home from '../components/homeComponent/Home'
import Projects from '../components/projectComponent/Projects'
import SocialIcons from '../components/socialIcons/SocialIcons'
import './mainpage.css'

function MainPage() {
  return (
    <div>
      <Header />
      <div className="container">
        <Home />
        <Projects />
        <About />
        <Contact />
      </div>
      <SocialIcons />
      <Footer />
    </div>
  )
}

export default MainPage
