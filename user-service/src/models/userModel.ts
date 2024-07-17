import { model, Schema } from "mongoose";

const userSchema = new Schema({
    name: {type: "string",required: true},
    email:{type: "string",required: true}
});

export default model('User', userSchema);