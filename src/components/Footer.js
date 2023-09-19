import { Col, Container, Row } from "react-bootstrap";
import ylogo from '../assets/6260efc8fc9a9002669d2f4ad9956cc0.jpg';
import slogo from '../assets/Spotify Logo.png';
import flogo from '../assets/Facebook Logo.png';

const Footer = props => {
    return <Container fluid style={{ backgroundColor: "#56CCF2", color: 'white', padding: "1rem 2rem", marginTop: "1rem" }}>
    <Row className="justify-content-center">
      <Col className="text-center">
        <h2 style={{ fontSize: "3rem" }}>The Generics</h2>
      </Col>
      <Col>
        <ul style={{ display: 'flex', listStyle: "none", justifyContent: "space-evenly" }}>
          <li><img src={ylogo} alt="youtube" style={{ width: "2rem" }} /></li>
          <li><img src={slogo} alt="spotify" style={{ width: "2rem" }} /></li>
          <li><img src={flogo} alt="facebook" style={{ width: "2rem" }} /></li>
        </ul>
      </Col>
    </Row>
  </Container>
}

export default Footer;