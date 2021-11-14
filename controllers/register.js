const handleRegister = (req, res, db, bcrypt) => {
  const { email, name, password } = req.body;

  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(password, salt, function (err, hash) {
      db("login")
        .insert({
          HASH: hash,
          EMAIL: email,
        })
        .then(() => {
          // console.log(hash);
        });
    });
  });

  db("users")
    .insert({
      email: email,
      name: name,
      joined: new Date(),
    })
    .then((userID) => {
      db("users")
        .where("ID", userID[0])
        .then((userData) => {
          res.status(200).json(userData[0]);
        });
    })
    .catch((err) => {
      res.status(400).json("unable to register");
    });
};

module.exports = {
  handleRegister: handleRegister,
};
