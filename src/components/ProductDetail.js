import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetail = props => {
    const params = useParams();
    const item = props.products.filter(prod => prod.id === params.productId)[0];

    return <>
    <Container fluid className="my-5 w-75">
        <Row >
            <Col>
            <img src={item.imageUrl} alt="product"/>
            </Col>
            <Col>
            <h1>{item.title}</h1>
            <h2>&#8377; {item.price}</h2>
            <h3>4.1 &#127775;</h3>
            </Col>
        </Row>
    </Container>
    </>
}

export default ProductDetail;