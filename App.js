const express = require("express"); 
var cors = require("cors");
const mongoose =require("mongoose");//هي الداتا
const USER_MODEL = require("./API/modules/user.mod");
const app =express();
app.use(express.json());
app.use(cors());
const mongooseLink ="mongodb+srv://ranaiyad55:rana6677@cluster0.a3fxc4e.mongodb.net/"

mongoose.connect(mongooseLink)

mongoose.connection.on("connected",()=>{
    console.log("mongo connected");
});

app.get("/app",(req,res)=>{
    res.status(200).json({
        name:"rana",
        age:26,
    });
});

app.post("/whatsmyname",(req,res)=>{
    const {name,lastName}=req.body;
    if(!name||!lastName){
        res.status(701).json({
            error:true,
            errorMassege: "name and last name are must!",
        });
        return;
    }
    res.status(200).json({
        fullName: name + " " + lastName,
    });
})
app.post("/ceateNewUser", (req, res) => {
    const { name, price, phone  } = req.body;
  
    USER_MODEL.create({
      name: name,
      phone
    })
      .then((createRes) => {
        res.status(200).json({
          user: createRes._doc,
        });
      })
      .catch((e) => {
          res.status(500).json({
            error: true,
          errorMessage: e.message,
        });
      });
  });

  app.get("/findAllUsers",(req,res)=>{
    USER_MODEL.find({})
    .then((result)=> {
      res.status(200).json({
        user:result
      })
    })
    .catch((e) => {
      res.status(500).json({
      error: true,
      errorMessage: e.message,
    });
  });
  })

  app.post("/findAllByName",(req,res)=>{
    const name = req.body.name;
    USER_MODEL.find({name})
    .then((result)=> {
      res.status(200).json({
        user:result
      })
    })
    .catch((e) => {
      res.status(500).json({
      error: true,
      errorMessage: e.message,
    });
  });
  })

  app.post("/findAllById",(req,res)=>{
    const id = req.body.id;
    USER_MODEL.findOne({_id:id})
    .then((result)=> {
      res.status(200).json({
        user:result
      })
    })
    .catch((e) => {
      res.status(500).json({
      error: true,
      errorMessage: e.message,
    });
  });
  })

  app.post("/deleteUser", (req, res) => {
    const _id = req.body._id;
    console.log("id",_id);
  
    USER_MODEL.deleteOne({_id })
      .then((result) => {
        if (result.deletedCount === 0) {
          res.status(404).json({
            error: true,
            message: "User not found",
          });
        } else {
          res.status(200).json({
            message: "User deleted successfully",
          });
        }
      })
      .catch((e) => {
        res.status(500).json({
          error: true,
          errorMessage: e.message,
        });
      });
  });

  app.post("/updateUser", (req, res) => {
    const _id = req.body._id;
    const updatedData = req.body.updatedData; // البيانات التي تريد تحديثها
  
    USER_MODEL.updateOne({ _id }, { $set: updatedData })
      .then((result) => {
        if (result.matchedCount === 0) {
          res.status(404).json({
            error: true,
            message: "User not found",
          });
        } else {
          res.status(200).json({
            message: "User updated successfully",
          });
        }
      })
      .catch((e) => {
        res.status(500).json({
          error: true,
          errorMessage: e.message,
        });
      });
  });

  


module.exports = app;
