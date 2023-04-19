const addUserMgt = require('express').Router();
const userModel = require('../../model/userschema');
const userMgt = require('../../model/userMgtSchema');
const fetchUser = require('../../middleware/fetchUser');
const { body, validationResult } = require('express-validator');
const userMgtModel = require('../../model/userMgtSchema');

addUserMgt.post('/addUserMgt',
    [
        body("name", "length at least of 3 digits").isLength({ min: 3 }),
        body("userManagementNo","6 digits").isLength(6)
    ],
    fetchUser,
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, error: errors });
        }

        try
        {
            // check user is admin??
            const userId = req.user.id;
            const userFind = await userModel.findById(userId);
            if (userFind.role != "admin") {
                return res.status(400).json({ success: false, message: "the member is not a admin..." });
            }

            // if user is admin
            const {userManagementNo,newOrExisting,name,status,admin} = req.body;

             // now for avoid duplicacy
             const find = await userMgtModel.findOne({ userManagementNo: userManagementNo });
             if (find) {
                 return res.status(400).json({ success: false, message: "this userManagement  no. is exist" });
             }
 

            const addUserMgt = new userMgtModel({
                userManagementNo: userManagementNo,
                newOrExisting: newOrExisting,
                name: name,
                status: status,
                admin: admin
            });
            const saveData = await addUserMgt.save();
            return res.status(200).json({success:true,saveData});
        }
        catch (error) {
            return res.status(400).json({success:false,err:"Internal Server Error..."});
        }
    }
);

module.exports = addUserMgt;