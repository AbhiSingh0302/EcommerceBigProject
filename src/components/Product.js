import { useContext } from "react";
import { Button, Col } from "react-bootstrap";
import { cartContext } from "../stores/context";

const Product = props => {
    const ctx = useContext(cartContext);

    const onClickHandler = () => {
        console.log('h');
        ctx.addItem({...props.item, quantity: 1})
    }

    return <Col xs={6}>
            <h3 className="text-center">{props.item.title}</h3>
            <img src={props.item.imageUrl} alt="music-1" style={{ width: '80%', marginLeft: '10%' }} />
            <div className="my-4">
              <span>${props.item.price}</span><Button style={{ float: "right" }} onClick={onClickHandler}>ADD TO CART</Button>
            </div>
  </Col>
}

export default Product;