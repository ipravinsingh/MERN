const mongoose = require("mongoose");

module.exports = async () => {
  const mongoUri =
    "mongodb+srv://praveen:Yzf6T6ZV7IdvjrO2@cluster0.oxrinhq.mongodb.net/?retryWrites=true&w=majority";

  try {
    const connect = await mongoose.connect(mongoUri);
    console.log(`MongoDB connected: ${connect.connection.host}`);
  } catch (e) {
    console.log(e);
    process.exit(1); 
  }
};
