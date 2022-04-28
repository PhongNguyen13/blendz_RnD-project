'use strict';

const firebase = require('../db');
const Accessorie = require('../models/accessorie');
const firestore = firebase.firestore();


const addAccessorie = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('accessorie').doc().set(data);
        res.send('Accessorie Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}


const getAllAccessorie = async (req, res, next) => {
    try {
        const accessories = await firestore.collection('accessorie');
        const data = await accessories.get();
        const accessoriesArray = [];
        if(data.empty) {
            res.status(404).send('No accessorie record found');
        }else {
            data.forEach(doc => {
                const accessorie = new Accessorie(
                    doc.id,
                    doc.data().name,
                    doc.data().price,
                    doc.data().imgUrl
                );
                accessoriesArray.push(accessorie);
            });
            res.send(accessoriesArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAccessorie = async (req, res, next) => {
    try {
        const id = req.params.id;
        const accessorie = await firestore.collection('accessorie').doc(id);
        const data = await accessorie.get();
        if(!data.exists) {
            res.status(404).send('accessorie with the given ID not found');
        }else {
            res.send(data.data());
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addAccessorie,
    getAllAccessorie,
    getAccessorie
}