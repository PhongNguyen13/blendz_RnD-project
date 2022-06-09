import React, { useEffect, useRef } from 'react';
import axios from 'axios';

export default function Payment() {

    var storage=window.localStorage;
    var uid = storage.getItem("UID");
    const paypal = useRef();
    var TotalPrice = storage.getItem("Total")


    axios.get('https://blendz.herokuapp.com/api/user/' + uid).then((res) => {
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
                
                axios.get('https://blendz.herokuapp.com/api/user/cart/'+ uid).then((res) => {
                    const result = res.data;
                    for(var i = 0; i < result.length; i++){
//update order number for cart
                        let setOrderID = {
                            "itemID":result[i].id,
                            "orderID": orderID
                        };
                        axios.post('https://blendz.herokuapp.com/api/user/update/cartitem/' + uid, setOrderID).then(res=>{
                            //console.log(res);
                        })
//create order number
                        let postPaidListData = {
                            "orderID": orderID
                        }
                        axios.post('https://blendz.herokuapp.com/api/user/create/paidlist/' + uid, postPaidListData).then(res => {
                            //console.log(res);
                        })
                    }
                })


                axios.get('https://blendz.herokuapp.com/api/user/cart/'+ uid).then((res) =>{
                    const result = res.data;
                    for(var i = 0; i < result.length; i++){
                        console.log("this is the the id get from cart" + result[i].id)
                        
//post order list
                        let postdata = result[i];
                        //console.log(result[i]);
                        axios.post('https://blendz.herokuapp.com/api/user/update/PaidList/' + uid, postdata).then(res=>{
                            //console.log(res);
                        })
//clean the cart
                        let postDeleteitemID = {
                            "itemID":result[i].id
                        }
                        console.log("id from post to delete api"+result[i].id);

                        axios.post('https://blendz.herokuapp.com/api/user/cart/delete/' + uid, postDeleteitemID).then(res =>{
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
                axios.post('https://blendz.herokuapp.com/api/user/update/' + uid, postdata).then(res =>{
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
}