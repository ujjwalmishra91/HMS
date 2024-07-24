import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Configure dotenv to load environment variables from .env file
dotenv.config();

export const dbConnection = () => {
  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri) {
    console.error('MONGO_URI is not defined');
    return;
  }

  mongoose
    .connect(mongoUri, {
      dbName: 'MERN_STACK_HOSPITAL_MANAGEMENT_SYSTEM',
    })
    .then(() => {
      console.log('Connected to database!');
    })
    .catch((err) => {
      console.log('Some error occurred while connecting to database:', err);
    });
};
