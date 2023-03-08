import { Container, Row, Col } from "react-bootstrap"

export function Footer(){
    return(
        <div className="bg-secondary mt-auto">
        <Container className="p-3">
          <p className="text-center text-white">Thank you for visiting this website</p>
          <Row>
            <Col className="text-center">
              <a >Views</a>
            </Col>
            <Col className="text-center">
              <a >Products</a>
            </Col>
            <Col className="text-center">
              <a >Buy</a>
            </Col>
          </Row>
        </Container>
      </div>
    )
}