const updateMembership = require('express').Router();
const userModel = require('../../model/userschema');
const membershipModel = require('../../model/membershipschema');
const fetchUser = require('../../middleware/fetchUser');
const { body, validationResult } = require('express-validator');
const moment = require('moment');  // for date formate

updateMembership.put('/updateMembership',
    fetchUser,
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, err: errors });
        }

        // check whether the user is admin or not
        const userID = req.user.id;
        const userFind = await userModel.findById(userID);
        if (userFind.role != "admin") {
            return res.status(400).json({ success: false, err: "the member is not a admin" });
        }

        const { membershipNo, startDate, endDate, membership, membershipRemove } = req.body;

        // convert date strings to ISODate format
        const formattedStartDate = moment(startDate,'DD-MM-YYYY').toDate();
        const formattedEndDate = moment(endDate,'DD-MM-YYYY').toDate();

        try {
            const membershipDB = await membershipModel.findOne({membershipNo:membershipNo});
            if (!membershipDB) {
                return res.status(400).json({ success: false, message: "Not found" });
            }

            // id
            const membershipNumber = membershipDB._id.toString();
            // now check if remove is true then remove the membership
            if (membershipRemove == "true") {
                await membershipModel.findByIdAndRemove(membershipNumber);
                return res.status(200).json({ success: true, message: "member removed successfully" });
            }
            else {
                // if remove is not true, then only update the membership
                await membershipModel.findByIdAndUpdate(membershipNumber, 
                {
                    startDate: formattedStartDate,
                    endDate: formattedEndDate,
                    membership
                });
                
                // now updated membership
                const updatedMembership = await membershipModel.findById(membershipNumber);
                return res.status(200).json({ success: true, updatedMembership });
            }
        }
        catch (error) {
            return res.status(400).json({ success: false, error: "Internal Server Error" });
        }
    }
)

module.exports = updateMembership;