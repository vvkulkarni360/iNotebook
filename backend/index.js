const ConnectToMongo = require('./db');
const express = require('express');
var cors = require('cors')

const app = express();
const port = 8000;

app.use(cors())
app.use(express.json())

ConnectToMongo().then(() => {
    console.log('MongoDB connected successfully');

    app.use('/api/auth',require('./routes/auth'))
    app.use('/api/notes',require('./routes/notes'))

    app.listen(port, () => {
        console.log(`iNotebook backend listening on http://localhost:${port}`);
    });
}).catch((error) => {       //error if problem on hosting
    console.error('Error during startup:', error.message);
});