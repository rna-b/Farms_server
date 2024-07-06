const USER_MODEL = require("../modules/user.mod");

const ceateNewUser= (req, res) => {
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
  }

  const findAllUsers= (req,res)=>{
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
  }
    
  const findAllByName=(req,res)=>{
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
  }  

  const  deleteUser= (req, res) => {
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
  }

  const updateUse= (req, res) => {
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
  } 

  const findOneByName= (req, res) => {
    const name = req.body.name;
  
    USER_MODEL.findOne({ name })
      .then((result) => {
        if (!result) {
          res.status(404).json({
            error: true,
            message: "User not found",
          });
        } else {
          res.status(200).json({
            user: result,
          });
        }
      })
      .catch((e) => {
        res.status(500).json({
          error: true,
          errorMessage: e.message,
        });
      });
  }

  module.exports ={
    ceateNewUser, 
    findAllUsers,
    findAllByName,
  }
