import React, { useEffect, useRef } from 'react';

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
                window.location.href = '/SuccessPayment';
            },
            onError: (err) => {
                console.log(err);
            }
        }).render(paypal.current)
    }, [])
    
    return (
        <div>
            <div ref={paypal}></div>
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