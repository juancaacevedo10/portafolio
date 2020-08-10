import React from 'react'
import CardProjects from './CardProjects'
import projectMocks from '../utils/mocks/project-Mocks'

export default function ContCard () {
  return (
    <div id="projects" className="container imgSpace mw-100">
      <h3 className="text-center py-4 text-white  ">Mis proyectos</h3>
      <div className="row">
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
    </div>
  )
}
