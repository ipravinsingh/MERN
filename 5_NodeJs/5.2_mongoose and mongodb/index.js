const mongoose = require("mongoose");
const User = require("./models/User");

const mongoUri =
  "mongodb+srv://praveen:qb3jrQMrLFOz8GbQ@cluster0.o0dhjcf.mongodb.net/?retryWrites=true&w=majority";

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

async function createUser(newUser) {
  const user = new User(newUser); //in memory user document created

  //   user.save().then(() => {
  //     console.log("user added");
  //   });

  const data = await user.save(); // user saved inside database
  console.log("user", data);
  console.log("data", data);
}

async function findUser() {
  // const users = await User.find();
  // const user = await User.findById("Id name")
  // const users = await User.find({email: "singhpravu@gmail.com"});
  // const user = await User.find({ marks: { $gt: 49 } });
  const user = await User.find({ email: { $regex: "i" } });
  console.log(user);
  return user;
}
async function updateMarks(userId, marks) {
  const user = await User.findById(userId);
  user.marks = marks;
  const updatedUser = await user.save();
  console.log(updatedUser);
}

async function deleteUser(userId) {
  const user = await User.findById(userId);
  if (!user) return;
  await user.delete();
  console.log("user has been deleted");
}

deleteUser("giveUserId");
// updateMarks("giveUserId", 92 );

// findUser();

// createUser({
//   email: "sighpravu@gmail.com",
//   password: "1234",
// });
