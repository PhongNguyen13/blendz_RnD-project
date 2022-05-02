import React, { useState } from 'react';
import PayPal from '../PayPal/PayPal';

function Payment() {

    const [checkout, setCheckOut] = useState(false);

    return (
        <div className='Payment'>
            {checkout ? (
                <PayPal />
            ) : (
                <button onClick={() => {setCheckOut(true);}}>Checkout</button>
            )};
        </div>
    );
}

export default Payment;