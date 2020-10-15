import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './about.css'

function About() {
  useEffect(() => {
    AOS.init({
      duration: 900
    });
    AOS.refresh(); 
  },[])
  return (
    <section id="about"className="sections">
      <h2 className="section__header">About</h2>

      <div className="about__content">
        <p className="about__text" data-aos="fade-up" data-aos-once="true">
          Hi! I am Emeka Afamefuna Nwosa, a creative software developer based in Kuala Lumpur Malaysia who is passionate about creating websites and applications that can be beneficial to people. I specialize in turning functional user interface design into real life products with exceptional user experience.
        </p>
        <p className="about__text" data-aos="fade-up" data-aos-once="true">
          Currently, I am a computer science senior at University Putra Malaysia (UPM) majoring in computer networks and communication. My journey as a software developer started in 2018 after taking a course on web development. Since then, I have been learning continuously and improving my skills. 
        </p>
        <p className="about__text" data-aos="fade-up" data-aos-once="true">
          During my study, I have learnt and used among others, the following tools, and technologies:
        </p>
        <ul className="tool__list" data-aos="fade-right" data-aos-once="true">
          <li>HTML5</li>
          <li>CSS / SCSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>NodeJS</li>
          <li>Java</li>
          <li>Python</li>
          <li>Git/Github</li>
        </ul>
        <p className="about__text" data-aos="fade-up" data-aos-once="true">
          In addition to the above, I am open to learning other interesting technologies as per requirement.
        </p>
      </div>
    </section>
  )
}

export default About
