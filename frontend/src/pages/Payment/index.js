// import React, { useEffect, useRef } from 'react';

// export default function Payment() {

//     var storage=window.localStorage;
//     var TotalPrice = storage.getItem("Total");
//     const paypal = useRef();
//     var storage=window.localStorage;
//     var TotalPrice = storage.getItem("Total")

//     useEffect(() => {
//         window.paypal.Buttons({
//             createOrder: (data, actions, err) => {
//                 return actions.order.create({
//                     intent: "CAPTURE",
//                     purchase_units: [
//                         {
//                             description: "Cool looking table",
//                             amount: {
//                                 currency_code: "NZD",
//                                 value: TotalPrice
//                             }
//                         }
//                     ]
//                 })
//             },
//             onApprove: async (data, actions) => {
//                 const order = await actions.order.capture();
//                 console.log(order);
//                 window.location.href = '/SuccessPayment';
//             },
//             onError: (err) => {
//                 console.log(err);
//             }
//         }).render(paypal.current)
//     }, [])
    
//     return (
//         <div>
//             <div ref={paypal}></div>
//         </div>
//     )
// }





import React, { useState } from 'react';

function Payment() {

    const [checkout, setCheckOut] = useState(false);

    return (
        <>
        <div id="paypal-button-container" class="paypal-button-container"></div>
        <div class="card_container">
            <form id="card-form">
                <label for="card-number">Card Number</label>
                <div id="card-number" class="card_field"></div>
                <div>
                    <label for="expiration-date">Expiration Date</label>
                    <div id="expiration-date" class="card_field"></div>
                </div>
                <div>
                    <label for="cvv">CVV</label>
                    <div id="cvv" class="card_field"></div>
                </div>
                <label for="card-holder-name">Name on Card</label>
                <input
                    type="text"
                    id="card-holder-name"
                    name="card-holder-name"
                    autocomplete="off"
                    placeholder="card holder name" />
                <div>
                    <label for="card-billing-address-street">Billing Address</label>
                    <input
                        type="text"
                        id="card-billing-address-street"
                        name="card-billing-address-street"
                        autocomplete="off"
                        placeholder="street address" />
                </div>
                <div>
                    <label for="card-billing-address-unit">&nbsp;</label>
                    <input
                        type="text"
                        id="card-billing-address-unit"
                        name="card-billing-address-unit"
                        autocomplete="off"
                        placeholder="unit" />
                </div>
                <div>
                    <input
                        type="text"
                        id="card-billing-address-city"
                        name="card-billing-address-city"
                        autocomplete="off"
                        placeholder="city" />
                </div>
                <div>
                    <input
                        type="text"
                        id="card-billing-address-state"
                        name="card-billing-address-state"
                        autocomplete="off"
                        placeholder="state" />
                </div>
                <div>
                    <input
                        type="text"
                        id="card-billing-address-zip"
                        name="card-billing-address-zip"
                        autocomplete="off"
                        placeholder="zip / postal code" />
                </div>
                <div>
                    <input
                        type="text"
                        id="card-billing-address-country"
                        name="card-billing-address-country"
                        autocomplete="off"
                        placeholder="country code" />
                </div>
                <br /><br />
                <button value="submit" id="submit" class="btn">Pay</button>
            </form>
        </div>
        <script src="/app.js"></script>
        </>
    );
}

export default Payment;