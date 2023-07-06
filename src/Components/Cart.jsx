import React, { useEffect, useState } from 'react';
import {Table, Row, Col,Button} from 'react-bootstrap';


import CartImage from '../assets/cart.png';
import { useNavigate } from 'react-router-dom';

export default function Cart({cartItems}) {

    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const navigate = useNavigate();

    useEffect(()=>{
        let tempPrice= 0;
        let tempQuantity = 0;
        Object.keys(cartItems).map((cartItemId) => {
            const details= cartItems[cartItemId];
            tempQuantity += details.quantity;
            tempPrice += details.quantity * details.price;
        });
        setTotalQuantity(tempQuantity);
        setTotalPrice(tempPrice);
    }, [])

    return(
        <div>
            <Row>
                <Col>
                    <h3 style={{marginTop:'4rem',marginLeft:'3rem'}}>Your Cart</h3>
                    <div>
                    <Table style={{marginTop:40,border:'2px solid Black',width:'500px',marginLeft:'5rem',marginTop:'4rem'}}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                        </thead> 
                        <tbody>
                            {Object.keys(cartItems).map((cartItemId)=>{
                                const itemDetails = cartItems[cartItemId];
                                return(
                                    <tr>
                                        <td>{itemDetails.title}</td>
                                        <td>{itemDetails.quantity}</td>
                                        <td>{itemDetails.quantity * itemDetails.price}</td>
                                    </tr>
                                )
                            })}
                            <tr style={{marginTop:40,border:'2px solid Black'}}>
                                <td>Total</td>
                                <td>{totalQuantity}</td>
                                <td>{totalPrice}</td>
                            </tr>
                        </tbody>
                    </Table>
                    <Button onClick={()=> navigate ('/checkout')} style={{marginLeft:'5rem'}}>Checkout</Button>
                    </div>
                </Col>
                <Col>
                    <img src={CartImage} height={300} style={{marginTop:'60px',marginLeft:'50px'}} />
                </Col>
            </Row>
        </div>
    )
}