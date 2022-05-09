const express = require('express');
const {addUser, 
    getUser, 
    updateUser, 
    updateUserCart,
    getuserCart, 
    deleteCartItem,    
    updatePenddingOrder,
    getuserPenddingOrder,
    deletePenddingOrder} = require('../controllers/userController');

const router = express.Router();

router.post('/user', addUser);
router.get('/user/:id', getUser);
router.post('/user/update/:id', updateUser);
router.post('/user/update/cart/:id', updateUserCart);
router.get('/user/cart/:id', getuserCart);
router.post('/user/cart/delete/:id', deleteCartItem);
router.post('/user/update/Pendding/:id', updatePenddingOrder);
router.get('/user/Pendding/:id', getuserPenddingOrder);
router.post('/user/Pendding/delete/:id', deletePenddingOrder);

module.exports = {
    routes: router
}