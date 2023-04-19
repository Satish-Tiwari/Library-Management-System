const signupRouter = require("express").Router();

// bcrypt js for making password strong via hash function ...
const bcrypt = require('bcryptjs');

// jsonweb token for authentaction ...
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

// Import user model ...
const UserModel = require("../../model/userschema");

// Require express validator
const { body, validationResult } = require('express-validator');

// Create new user in DB and validate it by using middleware function ...
signupRouter.post("/usersignup", [
    body("name", "Name should be at least 3 char.").isLength({ min: 3 }),
    body("email", "Email a valid email.").isEmail(),
    body("password", "Password length must be 8 digit.").isLength({ min: 8 })
   ], async (req, res) => {
    const { name, email, password } = req.body;

    //  Validating middleware if error return error in form of array ...
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array([]), success: false });
    }

    try {
        //  Find user if exist then return error message ...
        const userFind = await UserModel.findOne({ email: email });
        if (userFind)
            return res.status(400).json({ success: false, message: "User is already exists." });

        else {

            // creating salt for more strong password ...
            const salt = await bcrypt.genSalt(10);
            // converting password into string format ...
            const pass = String(password);
            // creating hash password with salt to make it more stronger then save it in db ...
            const enPass = await bcrypt.hash(pass, salt);

            // save the user in DB ...
            await UserModel.create({
                name: name,
                email: email,
                password: enPass
            });

            // Find user after saving in database ...
            const userFin = await UserModel.findOne({ email: email });
            // creating temprorary token in local db ...
            const data = {
                user: {
                    id: userFin._id
                }
            }
            console.log(userFin);
            const awthToken = await jwt.sign(data, JWT_SECRET);
            // console.log(awthToken);
            return res.status(200).json({ awthToken, success: true });
        }
    } catch (err) {
        console.log(err);
        return res.status(400).json({ err: "Internal server error", success: false });
    }
});

module.exports = signupRouter;
