const mongoose = require('mongoose');
const mongoUri = 'mongodb://0.0.0.0:27017';

const ConnectToMongo = async () => {
    try {
        await mongoose.connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
};

module.exports = ConnectToMongo;