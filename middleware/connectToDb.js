import mongoose from "mongoose";
const connectToDb = () => {
  if (mongoose.connection.readyState == 1) {
    console.log("connected to db");
    return;
  }
  mongoose.connect(process.env.MONGO_URI);
};
export default connectToDb;
