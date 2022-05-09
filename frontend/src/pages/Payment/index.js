import React, { useEffect, useRef } from 'react';
import { Redirect } from 'react-router-dom';

export default function Payment() {

    var storage=window.localStorage;
    var TotalPrice = storage.getItem("Total");
    storage.setItem("PayState", null);
    var PaymentState = storage.getItem("PayState");
    const paypal = useRef();

    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: "Cool looking table",
                            amount: {
                                currency_code: "NZD",
                                value: TotalPrice
                            }
                        }
                    ]
                })
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture();
                console.log(order);
                var storage=window.localStorage;
                storage.setItem("PayState", "Success");
            },
            onError: (err) => {
                console.log(err);
            }
        }).render(paypal.current)
    }, [])

    storage.setItem("PayState", "Success");
    if(PaymentState === "null"){
    return (
        <div>
            <div ref={paypal}></div>
        </div>
    )}else if(PaymentState === "Success"){
        return (
        <div>
            <Redirect ref={paypal} to='/'/>
        </div>
        )
    }else{
        return (<h1>Error</h1>)
    }
}



// import React, { useState } from 'react';
// import PayPal from '../PayPal/PayPal';

// function Payment() {

//     const [checkout, setCheckOut] = useState(false);

//     return (
//         <div className='Payment'>
//             {checkout ? (
//                 <PayPal />
//             ) : (
//                 <button onClick={() => {setCheckOut(true);}}>Checkout</button>
//             )};
//         </div>
//     );
// }

// export default Payment;