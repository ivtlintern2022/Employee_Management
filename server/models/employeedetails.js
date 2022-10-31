import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';
const { Schema } = mongoose;

const employeedetails = new Schema({
    _id: ObjectId,
    basic_info: {
      first: String,
      last: String
    }
  });
  