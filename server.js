const express = require("express");
const cors = require("cors");

const signInRoute = require("./routes/signin");
const registerRoute = require("./routes/register");
const profileRoute = require("./routes/profile");
const imageRoute = require("./routes/image");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/signin", signInRoute);
app.use("/register", registerRoute);
app.use("/profile", profileRoute);
app.use("/image", imageRoute);

app.get("/", (req, res) => {
  res.json();
});

// server listening on port 3001 --------------------
app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
