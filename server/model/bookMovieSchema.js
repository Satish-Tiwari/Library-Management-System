const mongoose = require('mongoose');

const bookMovieSchema = new mongoose.Schema({
    bookOrMovie: {
        type: String,
        require: [true, "Book/Movie selection is required"]
    },
    bookMovieName:{
        type: String,
        require: [true, "bookMovieName is required"]
    },
    authorName:{
        type:String,
        require:true
    },
    serialNo:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    status:{
        type:String,
        default:'available'
    },
    cost:{
        type:String,
        require:true
    },
    procurementDate:{
        type: Date,
        require: [true, "procurementDate is required"]
    },
    quanOrCopies:{
        type: String,
        require:[true,"quanOrCopies value is required"]
    }
});

const bookMovieModel = mongoose.model("bookMovie",bookMovieSchema);

module.exports = bookMovieModel;