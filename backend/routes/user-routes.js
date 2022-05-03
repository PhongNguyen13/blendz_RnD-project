const express = require('express');
const {addUser, getUser, updateUser} = require('../controllers/userController');

const router = express.Router();

router.post('/user', addUser);
router.get('/user/:id', getUser);
router.post('/user/update/:id', updateUser);

module.exports = {
    routes: router
}