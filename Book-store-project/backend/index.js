import express from"express";
import mongoose from 'mongoose';
import booksRoute from './routes/bookRoute.js';
import cors from 'cors';
// require('dotenv').config();

const app = express();

app.use(express.json());

// Middleware for handling CORS POLICY Option 1: Allow All Origins with Default of cors(*)
app.use(cors());

const PORT = 5001


app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome To Store');
  });
  
  app.use('/books', booksRoute);
  
  mongoose
    .connect("mongodb://127.0.0.1:27017/test?retryWrites=true&w=majority")
    .then(() => {
      console.log('App connected to database');
      app.listen(PORT, () => {
        console.log(`App is listening to port: ${PORT}`);
      });
    })
    .catch((error) => {
      console.log(error);
    });