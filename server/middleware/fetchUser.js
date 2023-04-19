// purpose of this middleware to get user id 
const jwt = require('jsonwebtoken');
// secret key .....
const JWT_SECRET = process.env.JWT_SECRET;

const fetchUser = async (req,res,next)=>{
    // extract token from header...
    const token = req.header("userToken");
    console.log(req.body);
    if(!token)
    {
        return res.status(401).send({err:"User Token Empty"});
    }
    // now verify the jwt token......
    try{
        const data = jwt.verify(token,JWT_SECRET);
        req.user = data.user;
    } 
    catch(error)
    {
        return res.status(400).send({success:false,err:"Internal Server error in token"});
    }
    next();
}

module.exports = fetchUser;