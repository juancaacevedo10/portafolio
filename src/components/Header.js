import React from 'react'

export default function header () {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-nav ">
      <div className="container-xl">
        <a className="navbar-brand" href="/">portafolio</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarsExample07XL">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-white animate__animated animate__rotateInDownRight" href="#welcome-section  ">Perfil</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white animate__animated animate__rotateInDownRight" href="#projects ">Proyectos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white animate__animated animate__rotateInDownRight" href="#contact ">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
