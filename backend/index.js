const ConnectToMongo = require('./db');
const express = require('express');

const app = express();
const port = 8000;

ConnectToMongo().then(() => {
    console.log('MongoDB connected successfully');

    app.get('/', (req, res) => {
        res.send('Hello Nothing!');
    });

    app.listen(port, () => {
        console.log(`Example app listening on http://localhost:${port}`);
    });
}).catch((error) => {
    console.error('Error during startup:', error.message);
});