import { model, Schema } from "mongoose";

const orderSchema = new Schema({
    userId:{type: "string",required: true},
    product:{type: "string",required: true},
    quantity:{type: "number",required: true}
})

export default model('Order',orderSchema);