
import React from 'react';
import SuccessImage from '../assets/success.png'

export default function Checkout() {
    return(
        <div style={{display: 'flex', justifyContent: 'center' , margin:70}}>
            <img src={SuccessImage} height={500}/>
        </div>
    );
}