import mongoose from "mongoose";

const Schema = mongoose.Schema;
const userSchema = Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
export default mongoose.model("User", userSchema);
