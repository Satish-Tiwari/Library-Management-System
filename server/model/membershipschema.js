// add membership
// firstname, lastname,contactno,contactaddress,
// aadharno,startdate,enddate,membership(6m,1y,2y)

// update membership
// membershipNumber, startdate, enddate, membershipExtn(6m,1y,2y), membershipRemove(yes,no)

const mongoose = require('mongoose');

const membershipSchema = new mongoose.Schema({
    membershipNo:{
        type:String,
        require:true
    },
    firstName: {
        type: String,
        require: [true, "First Name is required.."]
    },
    lastName: {
        type: String,
        require: [false, "Last Name is not required.."]
    },
    contactNo: {
        type: String,
        require: [true, "Contact Number is required.."]
    },
    contactAddress: {
        type: String,
        require: [true, "Contact Address is required.."]
    },
    aadharNo: {
        type: String,
        required: [true, "Aadhar Number is required.."]
    },
    startDate: {
        type: Date,
        required: [true, "Start Date is required.."]
    },
    endDate: {
        type: Date,
        required: [true, "End Date is required.."]
    },
    membership: {
        type: String,
        required: [true, "Membership avadhi is required.."]
    }
});

const membershipModel = mongoose.model("membership",membershipSchema);

module.exports = membershipModel;