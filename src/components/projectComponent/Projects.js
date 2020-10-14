import React from 'react'
import projectData from './projectData.json'
import Project from './Project'
import './project.css'

function Projects() {
  const projects = projectData.projects
  return (
    <section id="projects" className="sections">
      <h2 className="section__header">Projects</h2>
      <ul className="projects__wrapper">
        {projects.map(project => 
          <li key={project.id} className="project__item">
            <Project project={project}/>
          </li>
        )}
      </ul>
    </section>
  )
}

export default Projects
