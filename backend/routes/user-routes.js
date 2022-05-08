const express = require('express');
const {addUser, getUser, updateUser, updateUserCart,getuserCart} = require('../controllers/userController');

const router = express.Router();

router.post('/user', addUser);
router.get('/user/:id', getUser);
router.post('/user/update/:id', updateUser);
router.post('/user/update/cart/:id', updateUserCart);
router.get('/user/cart/:id', getuserCart);

module.exports = {
    routes: router
}