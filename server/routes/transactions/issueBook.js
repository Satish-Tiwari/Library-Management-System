// transactions for user side
const issueBook = require('express').Router();
const issueBookModel = require('../../model/issueBookSchema');
const fetchUser = require('../../middleware/fetchUser');
const { body, validationResult } = require('express-validator');
const moment = require('moment');

issueBook.post('/issueBook',
    [
        body("serialNo", "6 digits").isLength(6),
        body("bookName", "at least 3 characters").isLength({ min: 3 }),
        body("authorName", "at least of 3 characterss").isLength({ min: 3 })
    ],
    fetchUser,
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, error: errors });
        }

        try {
            const { serialNo, bookName, authorName, issueDate, remarks } = req.body;
            const formattedIssueDate = moment(issueDate, 'DD-MM-YYYY').toDate();


            // now for avoid duplicacy
            const find = await issueBookModel.findOne({ serialNo: serialNo });
            if (find) {
                if(find.user.toString() == req.user.id)
                return res.status(400).json({ success: false, message: "this serial no. is exist" });
            }

            // now check the issue date 
            if (!(moment(formattedIssueDate).isSameOrBefore(moment(), 'day'))) {
                return res.status(400).json({ success: false, message: "Issue date not lessar than today's date" });
            }

            // now for returnDate
            const dateToCalculate = moment(formattedIssueDate);
            const daysToAdd = 15;
            const returnDate = dateToCalculate.add(daysToAdd, 'days');
            const formattedReturnDate = moment(returnDate, 'DD-MM-YYYY');

            const addIssueBook = new issueBookModel({
                serialNo: serialNo,
                bookName: bookName,
                authorName: authorName,
                issueDate: formattedIssueDate,
                returnDate: formattedReturnDate,
                remarks: remarks,
                user: req.user.id
            });
            const saveData = await addIssueBook.save();
            return res.status(200).json({ success: true, saveData });
        }
        catch (error) {
            return res.status(400).json({ success: false, err: "Internal Server Error..." });
        }
    }
);

module.exports = issueBook;