const mongoose = require('mongoose');

const issueBookSchema = new mongoose.Schema({
    serialNo:{
        type:String,
        require:true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"users",
    },
    bookName:{
        type:String,
        require:true
    },
    authorName:{
        type:String,
        require:true
    },
    issueDate:{
        type: Date,
        require: true
    },
    returnDate:{
        type:Date,
        // require:true
    },
    remarks:{
        type: String,
    }
});

issueBookModel = mongoose.model("issueBook",issueBookSchema);

module.exports = issueBookModel;