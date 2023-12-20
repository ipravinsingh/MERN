//8CMMPO2GnLg0DlAE  PSWRD
const mongoose = require("mongoose");

module.exports = () => {
  const mongoUri =
    "mongodb+srv://praveen:8CMMPO2GnLg0DlAE@cluster0.o0dhjcf.mongodb.net/?retryWrites=true&w=majority";

  try {
    mongoose.connect(
      mongoUri,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      () => {
        console.log("mongodb connected");
      }
    );
  } catch (e) {
    console.log(e);
  }
};
