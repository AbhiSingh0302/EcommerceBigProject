import { Button, Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import image1 from './assets/Album 1.png';
import image2 from './assets/Album 2.png';
import image3 from './assets/Album 3.png';
import image4 from './assets/Album 4.png';
import merch1 from './assets/Shirt.png';
import merch2 from './assets/Cofee.png';
import ylogo from './assets/6260efc8fc9a9002669d2f4ad9956cc0.jpg';
import slogo from './assets/Spotify Logo.png';
import flogo from './assets/Facebook Logo.png';

const productsArr = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  }
]

function App() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" fixed="top">
        <Container className="justify-content-center">
          <Nav>
            <Nav.Link href="#home" className="text-white">Home</Nav.Link>
            <Nav.Link href="#features" className="text-white">Store</Nav.Link>
            <Nav.Link href="#pricing" className="text-white">About</Nav.Link>
          </Nav>
          <Button variant="outline-info" style={{ position: 'absolute', right: '1rem' }}>cart</Button>
        </Container>
      </Navbar>
      <Container fluid className="mt-5 text-center" style={{ paddingTop: '1rem', paddingBottom: '4rem', backgroundColor: '#777' }}>
        <h1 className="text-white" style={{ fontSize: '5rem' }}>The Generics</h1>
      </Container>
      <Container className="text-center py-5">
        <h2>Music</h2>
      </Container>
      <Container className="w-50">
        <Row className="justify-content-center">
          <Col>
            <h3 className="text-center">Album 1</h3>
            <img src={image1} alt="music-1" style={{ width: '80%', marginLeft: '10%' }} />
            <div className="my-4">
              <span>$12.99</span><Button style={{ float: "right" }}>ADD TO CART</Button>
            </div>
          </Col>
          <Col>
            <h3 className="text-center">Album 2</h3>
            <img src={image2} alt="music-2" style={{ width: '80%', marginLeft: '10%' }} />
            <div className="my-4">
              <span>$14.99</span><Button style={{ float: "right" }}>ADD TO CART</Button>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center my-5">
          <Col>
            <h3 className="text-center">Album 3</h3>
            <img src={image3} alt="music-3" style={{ width: '80%', marginLeft: '10%' }} />
            <div className="my-4">
              <span>$9.99</span><Button style={{ float: "right" }}>ADD TO CART</Button>
            </div>
          </Col>
          <Col>
            <h3 className="text-center">Album 4</h3>
            <img src={image4} alt="music-4" style={{ width: '80%', marginLeft: '10%' }} />
            <div className="my-4">
              <span>$19.99</span><Button style={{ float: "right" }}>ADD TO CART</Button>
            </div>
          </Col>
        </Row>
      </Container>
      <h2 className="text-center">Merch</h2>
      <Container className="w-50">
        <Row className="justify-content-center my-5">
          <Col>
            <h3 className="text-center">T-Shirt</h3>
            <img src={merch1} alt="merch-1" style={{ width: '80%', marginLeft: '10%' }} />
            <div className="my-4">
              <span>$19.99</span><Button style={{ float: "right" }}>ADD TO CART</Button>
            </div>
          </Col>
          <Col>
            <h3 className="text-center">Coffee Cup</h3>
            <img src={merch2} alt="merch-2" style={{ width: '80%', height: '70%', marginLeft: '10%' }} />
            <div className="my-4">
              <span>$6.99</span><Button style={{ float: "right" }}>ADD TO CART</Button>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="text-center">
        <Button variant="secondary">See the cart</Button>
      </Container>
      <Container fluid style={{ backgroundColor: "#56CCF2", color: 'white', padding: "1rem 2rem", marginTop: "1rem" }}>
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
    </>
  );
}

export default App;
