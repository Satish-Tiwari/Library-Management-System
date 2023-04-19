const mlOfBooks = require('express').Router();
const { body, validationResult } = require('express-validator');
const bookMovieModel = require('../../model/bookMovieSchema');
const userModel = require('../../model/userschema');
const fetchUser = require('../../middleware/fetchUser');

mlOfBooks.get('/mlOfBooks',
    fetchUser,
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, error: errors });
        }
        try {
            // check user is admin??
            // const userId = req.user.id;
            // const userFind = await userModel.findById(userId);
            // if (userFind.role != "admin") {
            //     return res.status(400).json({ success: false, message: "the member is not a admin..." });
            // }

            const total = await bookMovieModel.countDocuments({ bookOrMovie: "book" });
            const books = await bookMovieModel.find({ bookOrMovie: "book" }).sort({ _id: -1 });
            return res.status(200).json({ success: true, total, books });
        }
        catch (error) {
            return res.status(400).json({ success: false, message: "Internal server error......" });
        }
    })

module.exports = mlOfBooks;