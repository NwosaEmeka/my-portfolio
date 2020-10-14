import React, {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Project({ project }) {
  
  useEffect(() => {
    AOS.init({
      duration: 600
    });
    AOS.refresh();
  },[])
  return (
    <div className="project__content">
      <a href={project.url} className="project__image col">
        <div className="image" data-aos="zoom-out">
          <img src={project.image} alt={project.title}/>
        </div>
      </a>
      <div className="project__text-content col">
        <h2 className="project__title" data-aos="fade-up">{project.title}</h2>
        <p className="project__desc" data-aos="fade-up">{project.description}</p>
        <div className="project__links" data-aos="fade-down">
          <a className="project__btn" href={project.url}>Live Demo</a>
          <a className="project__btn" href={project.github}>View Code</a>
        </div>
      </div>
    </div>
  )
}

export default Project
