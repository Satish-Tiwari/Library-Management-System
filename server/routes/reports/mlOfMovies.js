const mlOfMovies = require('express').Router();
const {body,validationResult} = require('express-validator');
const bookMovieModel = require('../../model/bookMovieSchema');
const fetchUser = require('../../middleware/fetchUser');

mlOfMovies.get('/mlOfMovies',
fetchUser,
async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty())
    {
        return res.status(400).json({success:false,error:errors});
    }
    try
    {
        const total = await bookMovieModel.countDocuments({bookOrMovie:"movie"});
        const movies = await bookMovieModel.find({bookOrMovie:"movie"}).sort({_id:-1});
        return res.status(200).json({success:true,total,movies});
    }
    catch(error)
    {
        return res.status(400).json({success:false,message:"Internal server error......"});
    }
})

module.exports = mlOfMovies;