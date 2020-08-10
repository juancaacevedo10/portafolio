import React from 'react'

// eslint-disable-next-line react/prop-types
export default function CardProjects ({ titulo, descripcion, imagenPage, urlPage, id }) {
  return (
    <>
      <div className="col-12 col-sm-4 col-md-3 mb-4">
        <div className="card">
          <img
            src={process.env.PUBLIC_URL + imagenPage}
            className="card-img-top"
            alt={titulo} />
          <div className="card-body">
            <h5 className="card-title">{titulo}</h5>
            <p className="card-text">
              {descripcion}
            </p>
            <a href={urlPage} target="_blank" rel="noopener noreferrer" className="btn btn-color text-white">
                ver sitio
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
