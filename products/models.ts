import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id: String,
    name: String,
    image: String,
    cantidad: Number,
    detalle: String,
    categoria: String
});

export const Product = mongoose.model('Product', productSchema);