import React from 'react'
import CardProjects from './CardProjects'
import projectMocks from '../utils/mocks/project-Mocks'

export default function Carrusel () {
  return (
    <div id="projects" className="carousel-img pb-5">
      <h3 className="text-center py-4">Mis proyectos</h3>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          {projectMocks.projects.map((projects, index) => {
            return <CardProjects
              key={index}
              titulo={projects.title}
              descripcion={projects.description}
              imagenPage={projects.imagen}
              urlPage={projects.url}
              id={projects.id}
            ></CardProjects>
          }
          )
          }
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  )
}
