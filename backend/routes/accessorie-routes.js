const express = require('express');
const {addAccessorie, getAllAccessorie, getAccessorie} = require('../controllers/accessorieController');

const router = express.Router();

router.post('/accessorie', addAccessorie);
router.get('/accessories', getAllAccessorie);
router.get('/accessorie/:id', getAccessorie);

module.exports = {
    routes: router
}