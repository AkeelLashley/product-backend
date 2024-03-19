import { Schema, model } from "mongoose";

const todoSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title text required!"],
  },
  price: {
    type: Number,
    required: [true, "Price is required!"],
  },
  description: {
    type: String,
    required: [true, "Description is required!"],
  },
  category: {
    type: String,
    required: [true, "Category is required!"],
  },
  image: {
    type: String,
    required: [true, "Image URL is required!"],
  },
  rating: {
    type: Number,
  },
});

export default model("Todo", todoSchema);
