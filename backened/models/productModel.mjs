import mongoose  from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: false },
    price: { type: Number, required: true },
    image: { type: Array, required: true },
    category: { type: String, required: true },
    subCategory : { type: String, required: false },
    sizes: { type: Array, required: true },
    bestSeller: { type: Boolean },
    date: { type: Number, required : true }
})
const ProductModel = mongoose.models.product || mongoose.model('Product', ProductSchema);

export default ProductModel;