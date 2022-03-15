import mongoose from "mongoose";

const userTable = new mongoose.Schema({
  email: String!,
  password: String!,
  phone: String,
  created: {
    type: String,
    default: new Date(),
  },
  address: {
    country: String,
    city: String,
    postalcode: String,
    street: String,
    street_nr: Number,
  },
});

export default mongoose.model("User", userTable);
