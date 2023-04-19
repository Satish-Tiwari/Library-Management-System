const updateUserMgt = require('express').Router();
const userModel = require('../../model/userschema');
const userMgt = require('../../model/userMgtSchema');
const fetchUser = require('../../middleware/fetchUser');
const { body, validationResult } = require('express-validator');
const userMgtModel = require('../../model/userMgtSchema');

updateUserMgt.put('/updateUserMgt',
    [
        body("name", "length at least of 3 digits").isLength({ min: 3 })
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
            // first of all find
            const userMgtFind = await userMgtModel.findOne({userManagementNo: userManagementNo});
            if(!userMgtFind)
            {
                return res.status(400).json({success:false,message:"Object not found..."});
            }

            // id
            const userMgtId = userMgtFind._id.toString();
            // now find and update
            await userMgtModel.findByIdAndUpdate(userMgtId,{
                newOrExisting: newOrExisting,
                name: name,
                status: status,
                admin: admin
            });
            // now find updated object and return
            const updatedData = await userMgtModel.findById(userMgtId);
            return res.status(200).json({success:true,updatedData});
        }
        catch (error) {
            return res.status(400).json({success:false,err:"Internal Server Error..."});
        }
    }
);

module.exports = updateUserMgt;