import React, { useEffect, useRef } from 'react';
import axios from 'axios';
import {
    PayPalScriptProvider,
    PayPalHostedFieldsProvider,
    PayPalHostedField,
    usePayPalHostedFields,
} from "@paypal/react-paypal-js";

const SubmitPayment = () => {
    // Here declare the variable containing the hostedField instance
    const hostedFields = usePayPalHostedFields();

    const submitHandler = () => {
        if (!typeof hostedFields.submit !== "function") return; // validate that `submit()` exists before using it
        hostedFields
            .submit({
                // The full name as shown in the card and billing address
                cardholderName: "John Wick",
            })
            .then((order) => {
                fetch(
                    "/SuccessPayment"
                )
                    .then((response) => response.json())
                    .then((data) => {
                        // Inside the data you can find all the information related to the payment
                    })
                    .catch((err) => {
                        // Handle any error
                    });
            });
    };

    return <button onClick={submitHandler}>Pay</button>;
};

export default function Payment() {
    return (
        <PayPalScriptProvider
            options={{
                "client-id": "AZM_MzL_PrjRYM9QMPq8p69xf4-fK8MR7WpTcH4mSGk-IwY2ZJLkziRc7qGf_sfzOXhkSajfBcXd5UQS"
            }}
        >
            <PayPalHostedFieldsProvider
                createOrder={() => {
                    // Here define the call to create and order
                    return fetch(
                        "/SuccessPayment"
                    )
                        .then((response) => response.json())
                        .then((order) => order.id)
                        .catch((err) => {
                            // Handle any error
                        });
                }}
            >
                <PayPalHostedField
                    id="card-number"
                    hostedFieldType="number"
                    options={{ selector: "#card-number" }}
                />
                <PayPalHostedField
                    id="cvv"
                    hostedFieldType="cvv"
                    options={{ selector: "#cvv" }}
                />
                <PayPalHostedField
                    id="expiration-date"
                    hostedFieldType="expirationDate"
                    options={{
                        selector: "#expiration-date",
                        placeholder: "MM/YY",
                    }}
                />
                <SubmitPayment />
            </PayPalHostedFieldsProvider>
        </PayPalScriptProvider>
    );
}


/*export default function Payment() {

    var storage=window.localStorage;
    var uid = storage.getItem("UID");
    const paypal = useRef();
    var TotalPrice = storage.getItem("Total")


    axios.get('http://localhost:8080/api/user/' + uid).then((res) => {
        const result = res.data;
        let Total = result.CartTotalPrice;
        var storage=window.localStorage;
        storage.setItem("Total", Total);
    }).catch(() => {
        console.log('error to get price');
    })

    
    var TotalPrice = storage.getItem("Total");
    

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
                //console.log(order.id);
                const orderID = order.id;
                
                axios.get('http://localhost:8080/api/user/cart/'+ uid).then((res) => {
                    const result = res.data;
                    for(var i = 0; i < result.length; i++){
//update order number for cart
                        let setOrderID = {
                            "itemID":result[i].id,
                            "orderID": orderID
                        };
                        axios.post('http://localhost:8080/api/user/update/cartitem/' + uid, setOrderID).then(res=>{
                            //console.log(res);
                        })
//create order number
                        let postPaidListData = {
                            "orderID": orderID
                        }
                        axios.post('http://localhost:8080/api/user/create/paidlist/' + uid, postPaidListData).then(res => {
                            //console.log(res);
                        })
                    }
                })


                axios.get('http://localhost:8080/api/user/cart/'+ uid).then((res) =>{
                    const result = res.data;
                    for(var i = 0; i < result.length; i++){
                        console.log("this is the the id get from cart" + result[i].id)
                        
//post order list
                        let postdata = result[i];
                        //console.log(result[i]);
                        axios.post('http://localhost:8080/api/user/update/PaidList/' + uid, postdata).then(res=>{
                            //console.log(res);
                        })
//clean the cart
                        let postDeleteitemID = {
                            "itemID":result[i].id
                        }
                        console.log("id from post to delete api"+result[i].id);

                        axios.post('http://localhost:8080/api/user/cart/delete/' + uid, postDeleteitemID).then(res =>{
                            console.log(res);
                        })
                    }
                }).catch(()=>{
                    console.log('error to get cart list');
                })
            
//reset Total price as 0
                let postdata ={
                    "CartTotalPrice": 0
                };
                axios.post('http://localhost:8080/api/user/update/' + uid, postdata).then(res =>{
                })
        
                storage.setItem("Total", 0);
                setTimeout("window.location.href = '/SuccessPayment'", 5000)

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
}*/