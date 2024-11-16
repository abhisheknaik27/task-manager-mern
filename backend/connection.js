const mongoose = require('mongoose');


const connectMongoose = async () => {
    try{
        const response = await mongoose.connect(process.env.MONGO_URL);
        if(response){
            console.log('connected to db')
        }
    }catch(err){
        console.log('Error Connecting To MongoDB')
    }
}

module.exports = connectMongoose;
