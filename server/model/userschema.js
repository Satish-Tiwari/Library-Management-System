const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true,"Name is required."] 
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    role:{
        type: String,
        default: "user"
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const dbModel = mongoose.model("users",userSchema);

module.exports = dbModel;