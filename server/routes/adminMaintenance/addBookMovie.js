const addBookMovie = require('express').Router();
const userModel = require('../../model/userschema');
const bookMovieModel = require('../../model/bookMovieSchema');
const fetchUser = require('../../middleware/fetchUser');
const { body, validationResult } = require('express-validator');
const moment = require('moment');

addBookMovie.post('/addBookMovie',
    [
        body("bookMovieName", "at least 3 characters").isLength({ min: 3 }),
        body("authorName", "at least 3 characters").isLength({ min: 3 }),
        body("serialNo", "6 digit").isLength(6)
        // validation of rest of the input is not required.....
    ],
    fetchUser,
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, error: errors });
        }

        try {
            // check user is admin??
            const userId = req.user.id;
            const userFind = await userModel.findById(userId);
            if (userFind.role != "admin") {
                return res.status(400).json({ success: false, message: "the member is not a admin..." });
            }

            // if, user is admin....
            const { bookOrMovie, bookMovieName, authorName, serialNo, category, status, cost, procurementDate, quanOrCopies } = req.body;
            const formattedProcurementDate = moment(procurementDate, 'DD-MM-YYYY').toDate();

            // now for avoid duplicacy
            const find = await bookMovieModel.findOne({ serialNo: serialNo });
            if (find) {
                return res.status(400).json({ success: false, message: "this serial no. is exist" });
            }

            const addBookMovie = new bookMovieModel({
                bookOrMovie: bookOrMovie,
                bookMovieName: bookMovieName,
                authorName: authorName,
                serialNo: serialNo,
                category: category,
                status: status,
                cost: cost,
                procurementDate: formattedProcurementDate,
                quanOrCopies: quanOrCopies
            });
            const saveData = await addBookMovie.save();
            return res.status(200).json({ success: true, saveData });
        }
        catch (error) {
            return res.status(400).json({ success: false, err: "Internal Server Error..." });
        }
    }
);

module.exports = addBookMovie;