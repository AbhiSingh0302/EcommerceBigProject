import { useContext } from "react";
import { Button, Col } from "react-bootstrap";
import { cartContext } from "../stores/context";
import classes from './Product.module.css';
import { NavLink } from "react-router-dom";

const Product = props => {
    const ctx = useContext(cartContext);

    const onClickHandler = () => {
        console.log('h');

        let email = localStorage.getItem("email");
        const atIndex = email.indexOf("@");
        email = email.slice(0, atIndex);
        fetch(`https://crudcrud.com/api/a39c7b2f5034476f9b178050175a511e/${email}`, {
            method: 'POST',
            body: JSON.stringify({...props.item, quantity: 1}),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            return res.json();
        }).then(data => {
            console.log(data);
        }).catch(err => {
            console.log(err);
        })

        ctx.addItem({...props.item, quantity: 1})
    }

    return <Col xs={6} className={classes.product}>
            <h3 className="text-center">{props.item.title}</h3>
            <NavLink to={`products/${props.item.id}`}>
            <img src={props.item.imageUrl} alt="music-1" style={{ width: '80%', marginLeft: '10%' }} />
            </NavLink>
            <div className="my-4">
              <span>${props.item.price}</span><Button style={{ float: "right" }} onClick={onClickHandler}>ADD TO CART</Button>
            </div>
  </Col>
}

export default Product;