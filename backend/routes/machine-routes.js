const express = require('express');
const {addMachine, getAllMachine, getMachine, updateMachine, deleteMachine} = require('../controllers/machineController');

const router = express.Router();

router.post('/machine', addMachine);
router.get('/machines', getAllMachine);
router.get('/machine/:id', getMachine);
router.post('/machine/update/:id', updateMachine);
router.get('/machine/delete/:id', deleteMachine);

module.exports = {
    routes: router
}