import mongoose, { Document } from 'mongoose';

interface User extends Document {
  name: string;
  email: string;
  // other fields
}

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String, 
    required: true,
    unique: true,
  },
  phoneNumber:{
    type: String,
    required: true,
    unique: true,
  },
  password:{
    type: String,
    required: true,
  },
  balance:{
    type: Number,
    required: true,
  }
});



export const userModel = () => {
  const model =
    mongoose.models && mongoose.models.User
      ? (mongoose.models.User as mongoose.Model<User>)
      : mongoose.model<User>('User', userSchema);

  return model;
};

