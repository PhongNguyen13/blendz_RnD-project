'use strict';

const firebase = require('../db');
const User = require('../models/user');
const Cart = require('../models/cart');
const firestore = firebase.firestore();



const addUser = async (req, res, next) => {
    try {
        const data = req.body;
        const id = req.body.id;
        await firestore.collection('user').doc(id).set(data);
        res.send('User Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getUser = async (req, res, next) => {
    try {
        const id = req.params.id;
        const user = await firestore.collection('user').doc(id);
        const data = await user.get();
        if(!data.exists) {
            res.status(404).send('User with the given ID not found');
        }else {
            res.send(data.data());
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateUser = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const user =  await firestore.collection('user').doc(id);
        await user.update(data);
        res.send('User record updated successfuly');        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateUserCart = async (req, res, next) => {
    try {
        const uid = req.params.id;
        const itemID = req.body.itemID;
        const data = req.body;
        await firestore.collection('user').doc(uid).collection('cart').doc(itemID).set(data);
        res.send('Cart record updated successfuly');        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getuserCart = async (req, res, next) => {
    try {
        const uid = req.params.id;
        const carts = await firestore.collection('user').doc(uid).collection('cart');
        const data = await carts.get();
        const cartsArray = [];
        if(data.empty) {
            res.status(404).send('No item in cart');
        }else {
            data.forEach(doc => {
                const cart = new Cart(
                    doc.id,
                    doc.data().number
                );
                cartsArray.push(cart);
            });
            res.send(cartsArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteCartItem = async (req, res, next) => {
    try {
        const uid = req.params.id;
        const itemID = req.body.itemID;
        await firestore.collection('user').doc(uid).collection('cart').doc(itemID).delete();
        res.send('Item deleted successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}


module.exports = {
    addUser,
    getUser,
    updateUser,
    updateUserCart,
    getuserCart,
    deleteCartItem
}