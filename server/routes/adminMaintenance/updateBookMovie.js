const updateBookMovie = require('express').Router();
const userModel = require('../../model/userschema');
const bookMovieModel = require('../../model/bookMovieSchema');
const fetchUser = require('../../middleware/fetchUser');
const {body,validationResult} = require('express-validator');
const moment = require('moment'); // for date

updateBookMovie.put('/updateBookMovie',
fetchUser,
async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty())
    {
        return res.status(400).json({success:false,error:errors});
    }

    // check whether the user is admin??
    const userID = req.user.id;
    const userFind = await userModel.findById(userID);
    if(userFind.role != "admin")
    {
        return res.status(400).json({success:false,error:"the member is not a admin"});
    }

    const {bookOrMovie,bookMovieName,serialNo,status,procurementDate} = req.body;

    // convert date string to ISODate format
    const formattedProcurementDate = moment(procurementDate,'DD-MM-YYYY').toDate();

    try
    {
        const bookMovieDB = await bookMovieModel.findOne({serialNo:serialNo});
        if(!bookMovieDB)
        {
            return res.status(400).json({success:false,message:"Object Not found"});
        }
        
        // now id
        // console.log(bookMovieDB);
        const id = bookMovieDB._id.toString();
        // console.log(id);
        // now update 
        const updatedBookMovie = await bookMovieModel.findByIdAndUpdate(id,{
            bookOrMovie:bookOrMovie,
            bookMovieName:bookMovieName,
            procurementDate:formattedProcurementDate,
            status:status
        });

        return res.status(200).json({success:true,updatedBookMovie});
    }
    catch(error)
    {
        return res.status(400).json({success:false,error:"Internal Server Error"});
    }
});

module.exports = updateBookMovie;