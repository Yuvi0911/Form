import mongoose from "mongoose";

const connectDb = async (req, res) => {
  try {
    await mongoose.connect(
      "mongodb+srv://username:password@cluster0.zydhdyp.mongodb.net/UserDb"
    );
    console.log("connected to db")
  } catch (error) {
    console.log("error: ", error);
  }
};

export default connectDb;
