import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

export default function Presentacion () {
  return (
    <div id="welcome-section">
      <Container className="mx-0 w-100 container-info">
        <Row className="d-flex justify-content-center align-content-center  cont-info text-center">
          <Col xs={12} md={6} lg={6}>
            <Col xs={12} md={12}>
              <Image className="img-fluid imgP" src={process.env.PUBLIC_URL + '/Imagenes/img-perfil.jpeg'} roundedCircle />
            </Col>
          </Col>
          <Col className="pt-4 " xs={12} md={6} lg={6}>
            <h4>Juan Camilo Acevedo Castrillon</h4>
            <p>Desarrollador web front-end junior</p>
            <small className="text-monospace">Si se puede imaginar, se puede programar</small>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
