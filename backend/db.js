const firebase = require('firebase');
const config = require('./config');

// Required for side-effects
require("firebase/firestore");

const db = firebase.initializeApp(config.firebaseConfig);

module.exports = db;