import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import './socialicons.css'

function SocialIcons() {
  return (
    <div className="social__icons-wrapper">
      <div className="social__icons">
        <a href="https://github.com/NwosaEmeka" className="social__icon">
          <FaGithub size={18}/>
        </a>
        <a href="https://www.linkedin.com/in/emeka-nwosa-31711231/" className="social__icon">
          <FaLinkedinIn size={18}/>
        </a>
        <a href="https://www.facebook.com/nwosa.gafferemeka" className="social__icon">
          <FaFacebook size={18}/>
        </a>
        <a href="https://twitter.com/Gaffer_ng" className="social__icon">
          <FaTwitter size={18}/>
        </a>
      </div>
    </div>
  )
}

export default SocialIcons
