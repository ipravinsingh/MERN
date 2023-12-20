/////////////// Without using mongoDb database__

const express = require("express");
const dotenv = require("dotenv");
const app = express();
app.use(express.json());
dotenv.config({ path: "./.env" });

// Middleware__
app.use((req, res, next) => {
  console.log(req.method, req.url, new Date().toTimeString());
  next();

  //   if(req.body && req.body.name === 'Praveen'){
  //     next();
  //   }
  //   else{
  //     res.send("Not allowed")
  //   }
});

// Importing main Router
const mainRouter = require("./routes/");
app.use("/api", mainRouter);

// For post Router__
// const postRouter = require("./routes/post");
// app.use("/post", postRouter);

// For auth Router__
// const authRouter = require("./routes/auth");
// app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.send({
    data: "ok",
  });
});

// console.log(process.env.SECRET_API_KEY);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Starting Listening on port:", PORT);
});

// ////////////////////// With MongoDb database__
// // For env__
// const dotenv = require("dotenv");
// dotenv.config({ path: "./.env" });

// // For express__
// const express = require("express");
// const app = express();
// app.use(express.json());

// const dbConnect = require("./dbConnect");

// // Middleware__

// app.use((req, res, next) => {
//   console.log(req.method, req.url, new Date().toTimeString());
//   next();
//   //   if(req.body && req.body.name === 'Praveen'){
//   //     next();
//   //   }
//   //   else{
//   //     res.send("Not allowed")
//   //   }
// });

// // Importing main Router
// const mainRouter = require("./routes/");
// app.use("/api", mainRouter);

// // For post Router__
// // const postRouter = require("./routes/post");
// // app.use("/post", postRouter);

// // For auth Router__
// // const authRouter = require("./routes/auth");
// // app.use("/auth", authRouter);

// app.get("/", (req, res) => {
//   res.send({
//     data: "ok",
//   });
// });

// // console.log(process.env.SECRET_API_KEY);

// const PORT = process.env.PORT;
// dbConnect();

// app.listen(PORT, () => {
//   console.log("Starting Listening on port:", PORT);
// });
