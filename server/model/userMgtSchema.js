const mongoose = require('mongoose');

const userMgtSchema = new mongoose.Schema({
    userManagementNo:{
        type:String,
        require:true
    },
    newOrExisting:{
        type:String,
        require:[true, "newOrExisting field is required"]
    },
    name:{
        type:String,
        require:[true,"name of the user is required"]
    },
    status:{
        type:String, // active or in-active
        require:[true]
    },
    admin:{
        type:String, // true or false
        require:[true]
    }
});

const userMgtModel = mongoose.model("userMgt",userMgtSchema);

module.exports = userMgtModel;