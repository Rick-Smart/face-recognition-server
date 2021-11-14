const handleProfile =  (req, res,db) => {
    const { id } = req.params;
    db("users")
      .where("ID", id)
      .then((userData) => {
        if (userData[0]) {
          res.status(200).json(userData[0]);
        } else {
          res.status(404).json("no user found");
        }
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  }

  module.exports = {
      handleProfile: handleProfile,
  }