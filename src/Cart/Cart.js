import { Button } from 'react-bootstrap';
import classes from './Cart.module.css';
import { useState } from 'react';

const cartElements = [
    {
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        quantity: 2,
    },
    {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        quantity: 3,
    },
    {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        quantity: 1,
    }
]

const Cart = props => {
    const [items, setItems] = useState(cartElements);

    const removeItem = e => {
        setItems(pre => pre.filter(item => item.title !== e.target.id))
    }


    return <div className={classes.cart}>
        <h1>Cart</h1>
        <table className={classes['item-list']}>
            <thead>
            <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
            </tr>
            </thead>
            <tbody>
            {items.map(ele => (
                <tr key={ele.title}>
                    <td>{ele.title}</td>
                    <td>{ele.price}</td>
                    <td>{ele.quantity}</td>
                    <td><Button variant='secondary' id={ele.title} onClick={removeItem}>Remove</Button></td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
}

export default Cart;


