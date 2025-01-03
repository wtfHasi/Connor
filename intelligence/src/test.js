const mongoose = require('mongoose');

require('dotenv').config();

const testConnection = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        process.exit(0);
    } catch (error) {
        console.error(`Connection Error: ${error.message}`);
        process.exit(1);
    }
};

testConnection();
