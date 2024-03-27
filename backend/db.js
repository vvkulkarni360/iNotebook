const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require("mongodb");
// const mongoURI = 'mongodb://0.0.0.0:27017/inotebook';
const mongoURI = 'mongodb://0.0.0.0:27017/inotebook';

const ConnectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
};

module.exports = ConnectToMongo;