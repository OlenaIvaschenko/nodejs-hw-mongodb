import mongoose from 'mongoose';
// src/db/initMongoDB.js
import dotenv from "dotenv";

dotenv.config();

export const initMongoConnection = async () => {
  try {

    const user = process.env.MONGODB_USER;
    const pwd = process.env.MONGODB_PASSWORD;
    const url = process.env.MONGODB_URL;
    const db = process.env.MONGODB_DB;

    console.log(user,pwd,url,db);
    

    await mongoose.connect(
        // mongodb+srv://oyivaschenko_db_user:<db_password>@cluster0.pofszhz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
      `mongodb+srv://${user}:${pwd}@${url}/${db}?retryWrites=true&w=majority`,
    );

    console.log('Mongo connection successfully established!');
  } catch (e) {
    console.log('Error while setting up mongo connection', e);
    throw e;
  }
};
