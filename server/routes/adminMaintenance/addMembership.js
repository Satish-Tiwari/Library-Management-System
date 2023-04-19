const addMembership = require('express').Router();
const userModel = require('../../model/userschema');
const membershipModel = require('../../model/membershipschema');
const fetchUser = require('../../middleware/fetchUser');
const { body, validationResult } = require('express-validator');

addMembership.post('/addMembership',
    [
        body("membershipNo","6 digits").isLength(6),
        body("firstName", "firstName at least 3 char..").isLength({ min: 3 }),
        body("lastName", "lastName at least of 3 characters..").isLength({ min: 3 }),
        body("contactNo", "must be of 10 digits").isLength(10),
        body("contactAddress", "contactAddress at least of 3 char..").isLength({ min: 3 }),
        body("aadharNo", "aadhar no must be of 12 digits").isLength(12)
    ],

    fetchUser,

    async (req, res) => {
        const errors = await validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, err: errors });
        }

        try {
            // check whether the user is normal user or admin, if not a admin then generate error b/c he has no permission....
            const userID = req.user.id;
            const userFind = await userModel.findById(userID);
            if (userFind.role != "admin") {
                return res.status(400).json({ success: false, err: "the member is not a admin" })
            }
            
            // now, if user is admin
            const {membershipNo, firstName, lastName, contactNo, contactAddress, aadharNo, startDate, endDate, membership } = req.body;
            
               // now for avoid duplicacy
               const find = await membershipModel.findOne({ membershipNo: membershipNo });
               if (find) {
                   return res.status(400).json({ success: false, message: "this membership no. is exist" });
               }
   

            const addMember = new membershipModel({
                membershipNo: membershipNo,
                firstName: firstName,
                lastName: lastName,
                contactNo: contactNo,
                contactAddress: contactAddress,
                aadharNo: aadharNo,
                startDate: startDate,
                endDate: endDate,
                membership: membership
            });
            const saveData = await addMember.save();
            return res.status(200).json({ success: true, saveData });
        }
        catch (error) {
            res.status(500).json({ err: "Internal server error", success: false });
        }
    });

module.exports = addMembership;

