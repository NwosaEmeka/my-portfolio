import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div className="footer">
      <p className="footer__text">
        Inspired by <a href="https://brittanychiang.com/">Brittany</a> and Developed by <a href="/">Emeka</a>
      </p>
      <p>&copy;{new Date().getFullYear()}</p>
    </div>
  )
}

export default Footer
