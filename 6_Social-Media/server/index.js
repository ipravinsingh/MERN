// // Lec_1
// const express = require("express");
// const dotenv = require("dotenv");
// dotenv.config("./.env");
// const app = express();
// const dbconnect = require("./dbconnect");
// const mainRouter = require("./routers/index");
// const morgan = require("morgan");


// //middlewares
// app.use(express.json());
// app.use(morgan("common"));

// app.get("/", (req, res) => {
//   res.status(200).send("Ok from server");
// });

// app.use("/api", mainRouter);

// dbconnect();

// const PORT = process.env.PORT || 4001;
// app.listen(PORT, () => {
//   console.log(`Listening on port ${PORT}`);
// });

// // Lec_2,3,4,5
// const express = require("express");
// const dotenv = require("dotenv");
// dotenv.config("./.env");
// const app = express();
// const dbconnect = require("./dbconnect");
// const mainRouter = require("./routers/index");
// const morgan = require("morgan");
// const cookieParser = require("cookie-parser");
// const cors = require("cors");

// //middlewares
// app.use(express.json());
// app.use(morgan("common"));
// app.use(cookieParser());
// app.use(
//   cors({
//     credentials: true,
//     origin: "http://localhost:3000",
//   })
// );

// app.get("/", (req, res) => {
//   res.status(200).send("Ok from server");
// });

// app.use("/api", mainRouter);

// dbconnect();

// const PORT = process.env.PORT || 4001;
// app.listen(PORT, () => {
//   console.log(`listening on port ${PORT}`);
// });

// Lec_6
const express = require("express");
const dotenv = require("dotenv");
dotenv.config("./.env");
const app = express();
const dbconnect = require("./dbconnect");
const mainRouter = require("./routers/index");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const cloudinary = require("cloudinary").v2;

// Cloudnary Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDNARY_CLOUD_NAME,
  api_key: process.env.CLOUDNARY_API_KEY,
  api_secret: process.env.CLOUDNARY_API_SECRET,
});

//middlewares
app.use(express.json({ limit: "100mb" }));
app.use(morgan("common"));
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.get("/", (req, res) => {
  res.status(200).send("Ok from server");
});

app.use("/api", mainRouter);

dbconnect();

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
