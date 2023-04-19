const router = require("express").Router();

// Home page ...
router.get("/",(req,res)=>{
    return res.send("Hello iNotes");
});


const signup = require("./auth/signup");
router.use(signup);
router.use(require("./auth/login"))
router.use(require("./auth/adminsignup"));
router.use(require("./auth/adminlogin"));

// adminMaintenace
router.use(require("./adminMaintenance/addMembership"));
router.use(require("./adminMaintenance/updateMembership"));
router.use(require('./adminMaintenance/addBookMovie'));
router.use(require('./adminMaintenance/updateBookMovie'));
router.use(require('./adminMaintenance/addUserMgt'));
router.use(require('./adminMaintenance/updateUserMgt'));

//transactions
router.use(require('./transactions/issueBook'));
router.use(require('./transactions/returnBook'));
router.use(require('./transactions/payFine'));

//reports
router.use(require('./reports/mlOfBooks'));
router.use(require('./reports/mlOfMovies'));

module.exports = router;