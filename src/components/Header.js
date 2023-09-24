import { Button, Navbar, Container, Nav } from "react-bootstrap";
import { cartContext } from "../stores/context";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import classes from './Header.module.css';

const Header = props => {
  const ctx = useContext(cartContext);

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" fixed="top">
        <Container className="justify-content-center">
          <Nav>
            <NavLink className={classes.link} activeClassName={classes.active} to="/home">Home</NavLink>
            <NavLink className={classes.link} activeClassName={classes.active} to="/" exact>Store</NavLink>
            <NavLink className={classes.link} activeClassName={classes.active} to="/about">About</NavLink>
            <NavLink className={classes.link} activeClassName={classes.active} to="/login">Login</NavLink>
            <NavLink className={classes.link} activeClassName={classes.active} to="/contactus">Contact Us</NavLink>
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
