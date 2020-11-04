import React, {useEffect} from 'react'
import Snowfall from "react-snowfall"
import AOS from 'aos'
import 'aos/dist/aos.css'
import "./home.css"


function Home() {
  
  useEffect(() => {
    AOS.init({
      duration: 900
    });
    AOS.refresh(); 
  },[])
  return (
    <section className="hero__page"id="home">
      <div className="hero__content">
          <p className="welcome_para">
            Hi There <span role="img" aria-label="waving hand">✋</span>, I'm
          </p>
          <h1 className="header_text" data-aos="fade-right" data-aos-once="true">
            <span className="special__letter">N</span>wo<span className="special__letter">s</span>a E<span className="special__letter">m</span>ek<span className="special__letter">a</span>
          </h1>
          <p className="hero_text" data-aos="fade-left" data-aos-once="true">I’m a creative software developer based in Kuala Lumpur Malaysia who is passionate about building exceptional websites and applications that solves problems.
          </p>
          <div className="hero__btn" data-aos="fade-up" data-aos-once="true">
            <a href="#projects"className="btn btn-pry" aria-label="see my projects">See my work</a>
            <a href="/asset/EmekaNwosa Resume.pdf" download="Nwosa Emeka CV" className="btn btn-secondary" aria-label="download my resume">Resume</a>
          </div>
      </div>
      <Snowfall
      color="#66bd90"
      snowflakeCount={8}
      />
    </section>
  )
}

export default Home
