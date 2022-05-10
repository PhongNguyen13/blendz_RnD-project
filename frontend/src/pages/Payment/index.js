import React, { useEffect, useRef } from 'react';
import { Redirect } from 'react-router-dom';

export default function Payment() {

    var storage=window.localStorage;
    var TotalPrice = storage.getItem("Total");
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
                storage.setItem("PayState", "Success");
                window.location.reload();
            },
            onError: (err) => {
                console.log(err);
            }
        }).render(paypal.current)
    }, [])
    
    var PayState = storage.getItem("PayState");
    console.log("this is " + PayState);

    const getState = (input) => {
        if(input === "null"){
            console.log(input);
            return (
                <div>
                <h1>Working</h1>
                </div>
            );
        }else if(input === "Success"){
            console.log(input);
            return (
                <div>
                <h1>Success</h1>
                <Redirect to='/'/>
                </div>
            )
        }else {
            return(
                <h1>Error</h1>
            )
        }
    }
    return (
        <div>
            <div ref={paypal}></div>
            {getState(PayState)}
        </div>
    )
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