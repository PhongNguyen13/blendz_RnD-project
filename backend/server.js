const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config/config');


const server = express();
const connectDB = require('./config/database');

server.use(express.json());

//Home page
server.get('/', (req, res) => res.send('Welcome to Blendz!'));

server.listen(config.port, () => console.log('Server is listening on url http://localhost:' + config.port));