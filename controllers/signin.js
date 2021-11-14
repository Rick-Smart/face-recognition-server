const handleSignin = (req, res, db, bcrypt) => {
  const { email, password } = req.body;
  db("login")
    .where("EMAIL", email)
    .then((userData) => {
      bcrypt.compare(password, userData[0].HASH).then((matchingPassword) => {
        if (matchingPassword) {
          db("users")
            .where("EMAIL", email)
            .then((userData) => {
              res.status(200).json(userData[0]);
            });
        } else {
          res.status(404).json("No user found");
        }
      });
    });
};

module.exports = {
  handleSignin: handleSignin,
};
