import { Button, Navbar, Container, Nav } from "react-bootstrap";
import { cartContext } from "../stores/context";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

const Header = props => {
  const ctx = useContext(cartContext);

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" fixed="top">
        <Container className="justify-content-center">
          <Nav>
            {/* <Nav.Link href="#home" className="text-white">Home</Nav.Link>
            <Nav.Link href="#features" className="text-white">Store</Nav.Link>
            <Nav.Link href="#pricing" className="text-white">About</Nav.Link> */}
            <NavLink to="/home" style={({isActive}) => ({textDecoration: isActive ? "underline" : "none", color: isActive ? 'blue' : "white", margin: "5px 1rem", fontSize: "1.5rem"})} end>Home</NavLink>
            <NavLink to="/" style={({isActive}) => ({textDecoration: isActive ? "underline" : "none", color: isActive ? 'blue' : "white", margin: "5px 1rem", fontSize: "1.5rem"})} end>Store</NavLink>
            <NavLink to="/about" style={({isActive}) => ({textDecoration: isActive ? "underline" : "none", color: isActive ? 'blue' : "white", margin: "5px 1rem", fontSize: "1.5rem"})} end>About</NavLink>
          </Nav>
          <Button variant="outline-info" style={{ position: 'absolute', right: '1rem' }} onClick={props.onShowCart}>cart - <span>{ctx.total}</span></Button>
        </Container>
      </Navbar>
      <Container fluid className="mt-5 text-center" style={{ paddingTop: '1rem', paddingBottom: '4rem', backgroundColor: '#777' }}>
        <h1 className="text-white" style={{ fontSize: '5rem' }}>The Generics</h1>
      </Container>
    </>
  );
}

export default Header;
