const express = require('express');

const server = express();

server.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 8080;

server.listen(port, () => console.log(`Server running on port ${port}`));