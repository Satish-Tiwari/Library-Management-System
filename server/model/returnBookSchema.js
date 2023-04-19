const mongoose = require('mongoose');

const returnBookSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
    serialNo:{
        type:String,
        // ref:"issueBook",
        require:true
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

returnBookModel = mongoose.model("returnBook",returnBookSchema);

module.exports = returnBookModel;