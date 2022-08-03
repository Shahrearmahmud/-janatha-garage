import React from 'react';
import {Link} from 'react-router-dom'

const Checkout = () => {
    return (
        <div>
            <h2>Please Checkout your Booking</h2>
            

            <Link to ="/checkout">
                <button className='btn btn-primary'>Proceed Checkout</button>

            </Link>
            
        </div>
    );
};

export default Checkout;