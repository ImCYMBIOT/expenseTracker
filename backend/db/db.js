const mongoose = require('mongoose'); 
require('dotenv').config();

const db = async () => {
    try{
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Db Connected")
    } catch (err) {
        console.log("DB CONN Error");
    }
}

module.exports = db;