const mongoose = require('mongoose');
const uri = 'mongodb+srv://dfuseop:sushant165@cluster0.ejlex.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(uri ,{
            useNewUrlParser : true,
            useUnifiedTopology : true ,

        }) 

        console.log("Connection Successfully established with MongoDB");
    } catch (error) {
        console.error(error);
        process.exit();
    }
}

module.exports = connectDB;