import React, {useState, useEffect} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import HeaderLinks from './HeaderLinks'
import './header.css'


function Header() {
  const [isActiveNav, setIsActiveNav] = useState(false)
  const [scrollState, seScrollState] = useState(false)

  const handleNav = () => {
    setIsActiveNav(!isActiveNav)
  }
  const handleLinks = () => {
    if (isActiveNav) {
      setIsActiveNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })
  const handleScroll = () => {
    const scrollPos = document.body.scrollTop || document.documentElement.scrollTop || window.scrollY;
      if (scrollPos >= 50) {
        seScrollState(true)
      }
      else {
        seScrollState(false)
      }
  }
  
  return (
     <header className={scrollState? "header dark__background": "header"}>
      <div className="logo">
        <a href="/">
          <img src="/images/logo1.png" alt="logo" className="logo-image"></img>
        </a>
      </div>
      <nav className="nav__bar">
        <ul className={isActiveNav ? "nav__items show" : "nav__items"}>
          <li className="nav__links">
            <HeaderLinks name="#home" handleclick = {handleLinks}>
              Home
            </HeaderLinks>
          </li>
          <li className="nav__links">
            <HeaderLinks name="#projects" handleclick = {handleLinks}>
              Projects
            </HeaderLinks>
          </li>
          <li className="nav__links">
            <HeaderLinks name="#about" handleclick = {handleLinks}>
              About
            </HeaderLinks>
          </li>
          <li className="nav__links">
           <HeaderLinks name="#contact" handleclick = {handleLinks}>
              Contact
            </HeaderLinks>
          </li>
        </ul>
      </nav>
      <div className = {isActiveNav? 'hamburger open': 'hamburger'} onClick={handleNav}>
        <div className="nav__open">
          <FaBars size={22} />
        </div>
        <div className="nav__close">
          <FaTimes size={22}/>
        </div>
      </div>
    </header>
  )
}

export default Header
