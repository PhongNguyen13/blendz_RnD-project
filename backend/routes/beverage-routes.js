const express = require('express');
const {addBeverage, getAllBeverage, getBeverage} = require('../controllers/beverageController');

const router = express.Router();

router.post('/beverage', addBeverage);
router.get('/beverages', getAllBeverage);
router.get('/beverage/:id', getBeverage);

module.exports = {
    routes: router
}