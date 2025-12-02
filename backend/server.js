import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import {Book} from './models/book.models.js';
import bookRoutes from './router/bookRoutes.js';
const app = express();

//Middleware for parsing JSON data
app.use(express.json());

dotenv.config();
process.env.MONGO_URI
const PORT = process.env.PORT || 5555;


app.post("/api/books", async (req, res) => {
  try {
    const { title, author, publishedYear, price } = req.body;

    const book = await Book.create({
      title,
      author,
      publishedYear,
      price,
    });

    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


app.use(cors());


app.use('/books', bookRoutes);



app.get('/', (req, res) => {
  res.send('API is running...');
});



mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('MongoDB Connected successfully');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  })
}).catch((err) => {
  console.log(err);
}) 