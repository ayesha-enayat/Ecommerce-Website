import { v2 as Cloudinary } from 'cloudinary';
import ProductModel from '../models/productModel.mjs';

// function for Add product 
const addProduct = async (req, res) => {
    try {
        const { name, price, description, category, subCategory, sizes, bestSeller } = req.body;

        const image1 = req.files.image1 && req.files.image1[0];
        const image2 = req.files.image2 && req.files.image2[0];
        const image3 = req.files.image3 && req.files.image3[0];
        const image4 = req.files.image4 && req.files.image4[0];

        const images = [image1, image2, image3, image4].filter((item) => item !== undefined);
        let imagesUrl = await Promise.all(
            images.map(async (image) => {
                let result = await Cloudinary.uploader.upload(image.path, { resource_type: 'image' })
                return result.secure_url;
            })
        )
        const productData = {
            name,
            description,
            price: Number(price),
            category,
            subCategory,
            sizes: JSON.parse(sizes),
            bestSeller: bestSeller === "true" ? true : false,
            image: imagesUrl,
            date: Date.now()
        }
        console.log(productData);
        const product = new ProductModel(productData);
        await product.save();

        res.json({ success: true, message: "Product added successfully!" })

    } catch (error) {
        console.log(error);
        res.json({ success: fail, message: error.message });
    }
}
// function for list product 
const listProducts = async (req, res) => {
    try {
        const products = await ProductModel.find({});
        res.json({ success: true, products });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}
// function for remove product 
const removeProduct = async (req, res) => {
    try {
        await ProductModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Product removed successfully!" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// function for single product info
const singleProduct = async (req, res) => {
    try {
        const { productId } = req.body;
        const product = await ProductModel.findById(productId);
        res.json({ success: true, product });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// const updateProduct = async (req, res) => {
//     try {
//         const { id, ...updateData } = req.body;

//         const updatedProduct = await ProductModel.findByIdAndUpdate(
//             id,
//             updateData,
//             { new: true } // returns the updated document
//         );

//         if (!updatedProduct) {
//             return res.json({ success: false, message: "Product not found" });
//         }

//         res.json({
//             success: true, message: "Product updated successfully!", data: updatedProduct
//         });
//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: error.message });
//     }
// };



export {
    addProduct, listProducts, removeProduct, singleProduct
}