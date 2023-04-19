require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const cors = require('cors')
app.use(cors())

// Connect databse ...
const dbconnect = require("./database/dbconnect");
dbconnect();

// Calling router file ...
app.use(require("./routes/router"));

// Server listen here ...
app.listen(PORT,()=>{
    console.log(`server run at http://localhost:${PORT}`);
});