const mongoose = require('mongoose');
const payFine = new mongoose.Schema({
    bookName:{
        type:String,
        require:[true,"book name is required"]
    },
    authorName:{
        type:String,
        require:[true,"author name is required..."]
    },
    user:{
        type:mongoose.Schema.Types.ObjectId
    },
    serialNo:{
        type:String,
        require:[true,"serial No is required..."]
    },
    issueDate:{
        type:Date
    },
    returnDate:{
        type:Date
    },
    actualReturnDate:{
        type:Date
    },
    fineCalculated:{
        type:String,
        require:true
    },
    finePaid:{
        type:String,
        default:"false"
    },
    remarks:{
        type:String
    }
});

const payFineModel = mongoose.model("payfine",payFine);

module.exports = payFineModel;