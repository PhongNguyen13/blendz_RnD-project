const express = require('express');
const {addUser, getUser} = require('../controllers/userController');

const router = express.Router();

router.post('/user', addUser);
router.get('/user/:id', getUser);

module.exports = {
    routes: router
}