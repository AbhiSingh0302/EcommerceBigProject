import { Button, Container, Row } from "react-bootstrap";
import Product from "./Product";

const Products = props => {

  return (
    <>
      <Container className="text-center py-5">
        <h2>Music</h2>
      </Container>
      <Container className="w-50">
        <Row className="justify-content-center">
          {props.products.map(prod => (
            <Product key={prod.id} item={prod}/>
          ))}
        </Row>
      </Container>
      <h2 className="text-center mt-5">Merch</h2>
      <Container className="w-50">
        <Row className="justify-content-center my-5">
          {props.merch.map(prod => (
            <Product key={prod.id} item={prod}/>
          ))}
        </Row>
      </Container>
      <Container className="text-center">
        <Button variant="secondary">See the cart</Button>
      </Container>
    </>
  );
}

export default Products;
