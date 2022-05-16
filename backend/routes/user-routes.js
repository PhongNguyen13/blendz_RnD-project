const express = require('express');
const {addUser, 
    getUser, 
    updateUser, 
    updateUserCart,
    getuserCart, 
    deleteCartItem,    
    updatePenddingOrder,
    getuserPenddingOrder,
    deletePenddingOrder,
    updatePaidList,
    updateCart,
    getPaidList,
    CreatePaidList,
    getDetailOrderList} = require('../controllers/userController');

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
router.post('/user/update/PaidList/:id', updatePaidList);
router.post('/user/update/cartitem/:id', updateCart);
router.get('/user/paidlist/:id', getPaidList);
router.post('/user/create/paidlist/:id', CreatePaidList);
router.post('/user/order/detail/:id', getDetailOrderList);

module.exports = {
    routes: router
}