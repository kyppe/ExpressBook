import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  genres: [{ type: String }],

  rating: {
    type: Number,
    required: true,
  },
});
export default mongoose.model("Book", bookSchema);
