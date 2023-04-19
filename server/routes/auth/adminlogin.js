const adminloginRouter = require("express").Router();

const userModel = require("../../model/userschema");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { body, validationResult } = require('express-validator');

const JWT_SECRET = process.env.JWT_SECRET;



adminloginRouter.post("/adminlogin", [
    body("email", "Enter valid email").isEmail(),
    body("password", "Password must be 5 digits").exists()
], async (req, res) => {

    const { email, password } = req.body;
    let success = false;

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ err: "Invalid Arguments.",success:success });
    }

    try {
        const userFind = await userModel.findOne({ email: email });

        if (!userFind) {
            return res.status(400).json({ err: "Enter valid Email & Password",success:success });
        }
        else {
            
          // so that only login admin
            
            if (userFind.role != "admin") {
                return res.status(400).json({ success: false, message: "the member is  a admin... please refer admin login page" });
            }

            const pass = String(password);
            const comparePass = await bcrypt.compare(pass, userFind.password);

            if(!comparePass){
                return res.status(400).json({err: "Invalid credantiols",success:success});
            }

            const data ={
                user:{
                    id: userFind._id
                }
            }
            // console.log(data);
            const awthToken = jwt.sign(data,JWT_SECRET);

            return res.status(200).json({awthToken,success:true});
        }

    } catch (error) {
        console.log(error);
        return res.status(400).json({err: "Internal server error"})
    }
});


module.exports = adminloginRouter;

