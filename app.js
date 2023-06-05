const express = require("express");
const app = express();
const sequelize = require("./db");

const Student=require("./models/student")

const con=require("./controllers/createstudent")
const con1=require("./controllers/getdetails")
const con2=require("./controllers/updatedetails")
const con3=require("./controllers/deletedetails")


app.post("/create",con.createstudentinfo)
app.get("/getdetails",con1.getstudentdetails)
app.put("/updatedetails",con2.updatedetails)
app.delete("/deletedetails",con3.deletestudentdetails)


sequelize
  .sync()
  .then(app.listen(3000))
  .catch((err) => console.log(err));