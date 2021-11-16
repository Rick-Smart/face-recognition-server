const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT;

// end point imports -------------------------------
const signInRoute = require("./routes/signin");
const registerRoute = require("./routes/register");
const profileRoute = require("./routes/profile");
const imageRoute = require("./routes/image");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// middleware for end point routes ---------------------------------
app.use("/signin", signInRoute);
app.use("/register", registerRoute);
app.use("/profile", profileRoute);
app.use("/image", imageRoute);

// app.get("/", (req, res) => {
//   res.json();
// });

// server listening on port 3001 --------------------
app.listen(PORT || 3001, () => {
  console.log(`Server listening on port ${PORT}`);
});
