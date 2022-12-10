import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
    id: String,
    name: String,
    bibliografia:String,
    avatar:String
});

export const Client = mongoose.model('Client', clientSchema);