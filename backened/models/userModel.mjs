import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    carData: { type: Object, default: {} }
}, { minimize: false })

const UserModel = mongoose.models.product || mongoose.model("User", UserSchema);

export default UserModel;