const { model, Schema } = require("mongoose");
const producteSchema =new Schema({
    name:String,
    photo:[String],
    price:Number,
    discount:Number,
});
const PRODUCT_MODEL = model("producte",producteSchema);
module.exports = PRODUCT_MODEL;