const mongoose = require("mongoose");

function connectToDB(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=> {
        console.log("server is connected to Database");
        
    })
    .catch((err) => {
        console.log("Error while connecting to DB");
        process.exit(1);
    })
}

module.exports = connectToDB