const { Router } = require("express");
const { createNewUser, findAllUsers,whatsMYName,findAllById,findAllByName,updateUser,deleteUser,findOneByName} = require("../controller/user.controller");

const userRouter = Router();

userRouter.post("/signUp", createNewUser);
// userRouter.post("/login", (req , res) =>  login(req , res));
userRouter.post("/findAllUsers" , findAllUsers);
userRouter.post("/whatsmyname",whatsMYName);
userRouter.post("/findAllById", findAllById);
userRouter.post("/findAllByName",findAllByName);
userRouter.post("/updateUser",updateUser);
userRouter.post("/deleteUser",deleteUser);
userRouter.post("/findOneByName",findOneByName);




module.exports = userRouter;