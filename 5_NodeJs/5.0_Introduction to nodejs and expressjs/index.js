const express = require("express");

const app = express();
app.use(express.json());

app.get("/user", (req, res) => {
  console.log("User was called");
  //   res.send('hello user updated')
  res.json({
    name: "Praveen Singh",
    age: 24,
  });
});

app.post("/user", (req, res) => {
  console.log(req.body);
  res.json({
    name: "Priyanshu Singh",
    age: 22,
    multipleResult: req.body.a * req.body.b,
  });
});

app.get("/", (req, res) => {
  // res.sendFile(__dirname + "./index.html")
  res.json({
    success: true,
  });
});

app.listen(4000, () => {
  console.log("lisning on port: 4000");
});
