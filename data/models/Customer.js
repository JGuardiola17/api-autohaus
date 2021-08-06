import mongoose, { Schema } from 'mongoose';

const schema = new Schema({
  lastName: { type: String },
  firstName: { type: String },
  gender: { type: String },
  street: { type: String },
  postalCode: { type: String },
  city: { type: String },
});

export const Customer = mongoose.model('Customer', schema);

export default { Customer };
