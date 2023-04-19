const payFine = require('express').Router();
const payFineModel = require('../../model/payFineSchema');
const userSchema = require('../../model/userschema');
const { body, validationResult } = require('express-validator');
const fetchUser = require('../../middleware/fetchUser');
const issueBookModel = require('../../model/issueBookSchema');
const moment = require('moment');

payFine.post('/payFine',
    [
        body('serialNo','6 digits').isLength(6),
        body('bookName', 'at least of 3 characters').isLength({ min: 3 }),
        body('authorName', 'at least of 3 characters').isLength({ min: 3 })
    ],
    fetchUser,
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, error: errors });
        }
        try
        {
            const {serialNo,bookName,authorName,returnDate,fineCalculated,finePaid,remarks} = req.body;
            const bookObject = await issueBookModel.findOne({serialNo:serialNo});
            if(bookObject.user.toString() != req.user.id)
            {
                return res.status(400).json({success:false,message:"this book is not issued by you, you cannot pay fine......"});
            }

    // now for avoid duplicacy
            const check = await payFineModel.findOne({serialNo:serialNo});
            if(check)
            {   
                if(check.user.toString() == req.user.id)
                return res.status(400).json({success:false,message:"fine paid earlier....."});
            }


          const formattedReturnDate = moment(returnDate,'DD-MM-YYYY').toDate();
            const addPayFine = new payFineModel({
                bookName:bookName,
                authorName:authorName,
                user:bookObject.user.toString(),
                serialNo:serialNo,
                issueDate:bookObject.issueDate.toString(),
                returnDate:formattedReturnDate,
                actualReturnDate:bookObject.returnDate.toString(),
                fineCalculated:fineCalculated,
                finePaid:finePaid,
                remarks:remarks
            });
            const saveData = await addPayFine.save();
            return res.status(200).json({success:true,saveData});
        }
        catch(error)
        {
            return res.status(400).json({success:false,error:error});
        }
    }
);

module.exports = payFine;