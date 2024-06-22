const {Schema, model } = require("mongoose");


const userSchema =new Schema({
    name: String,
    age: Number,
    phone: {
        type: String,
        required: true,
      },
      points: {
        type: Number,
        default: 0,
      },
      price: {
        type: Number
      }
});
const USER_MODEL = model("user", userSchema);

module.exports = USER_MODEL;
//create user: 
