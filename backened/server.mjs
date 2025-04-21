import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import connectDB from './config/mongodb.mjs';
import connectCloudinary from './config/cloudinary.mjs';

// App config
dotenv.config();
const app = express();  
const port = process.env.PORT || 3007;
connectDB();
connectCloudinary();

// Middlewares
app.use(express.json());
app.use(cors());

// API endpoint
app.get('/', (req, res) => {
  res.send('API Working');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
