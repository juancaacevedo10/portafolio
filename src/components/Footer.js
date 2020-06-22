import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Footer () {
  return (
    <>
      <div id="contact" className="container-footer">
        <h3 className="text-center py-4">Contacto</h3>

        <Row>
          <Col xs={12}>
            <a className="link-foot" href="#welcome-section">
              Perfil
            </a>
          </Col>
          <Col xs={12}>
            <a className="link-foot" href="#projects">
              proyectos
            </a>
          </Col>
          <Col xs={12}>
            <a className="link-foot" href="#contact">
              Contacto
            </a>
          </Col>
          <Col className="pt-3" xs={12}>
            <a
              href="https://www.facebook.com/acevedocastrillon"
              target="_blank"
              rel="noopener noreferrer"
              className="profile-link"
            >
              <i className="fab fa-facebook-square"></i>
            </a>
            <a
              href="https://github.com/juancaacevedo10"
              target="_blank"
              rel="noopener noreferrer"
              className="profile-link px-3"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://twitter.com/juancaavedo?s=08"
              target="_blank"
              rel="noopener noreferrer"
              className="profile-link"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </Col>
        </Row>
      </div>
      <div className="container-copi">
        <p className="pt-2">© Creado por Juan Camilo Acevedo</p>
      </div>
    </>
  )
}
