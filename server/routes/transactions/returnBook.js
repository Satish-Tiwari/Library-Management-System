// transactions for user side
const returnBook = require('express').Router();
const returnBookModel = require('../../model/returnBookSchema');
const issueBookModel = require('../../model/issueBookSchema');
const fetchUser = require('../../middleware/fetchUser');
const { body, validationResult } = require('express-validator');
const moment = require('moment');

returnBook.post('/returnBook',
    [
        body('serialNo','6 digits').isLength(6),
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
            const { serialNo, bookName, authorName, issueDate, returnDate, remarks } = req.body;

            const bookObject = await issueBookModel.findOne({serialNo:serialNo});
            // console.log(bookObject.user.toString());
            if (bookObject.user.toString() != req.user.id) {
                console.log(bookObject);
                return res.status(400).json({ success: false, message: "this book (serial no) taken by any other person......" });
            }

        
            const find = await returnBookModel.findOne({serialNo:serialNo});
            if(find)
            {
                if(find.user.toString() == req.user.id)
                return res.status(400).json({success:false,message:"book returned earlier"});
            }

            console.log("hello")
            const formattedIssueDate = moment(issueDate, 'DD-MM-YYYY').toDate();
            const formattedReturnDate = moment(returnDate, 'DD-MM-YYYY').toDate();


            // const diff = moment.duration(moment(returnDate).diff(moment(issueDate)));
            // const days = parseInt(diff.asDays());
            // console.log(days);

            // console.log(formattedIssueDate);
            // console.log(formattedReturnDate);
           
            // if (formattedReturnDate.diff(formattedIssueDate, 'days') > 15) {
            //     return res.status(400).json({ success: false, message: "Pay fine........ because of return date..." });
            // }
            // if (formattedReturnDate.diff(formattedIssueDate, 'days') < 0) {
            //     return res.status(400).json({ success: false, message: "enter valid issue and return date" });
            // }
            const addReturnBook = new returnBookModel({
                serialNo: serialNo,
                bookName: bookName,
                authorName: authorName,
                issueDate: formattedIssueDate,
                returnDate: formattedReturnDate,
                remarks: remarks,
                user: req.user.id
            });
            const saveData = await addReturnBook.save();
            return res.status(200).json({ success: true, saveData });
        }
        catch (error) {
            return res.status(400).json({ success: false, err: "Internal Server Error..." });
        }
    }
);

module.exports = returnBook;