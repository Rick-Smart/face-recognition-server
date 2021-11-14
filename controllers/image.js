const handleImage = (req, res, db) => {
    const { id } = req.body;
    db("users")
      .where("ID", id)
      .increment("ENTRIES", 1)
      .then(() => {
        db("users")
          .where("ID", id)
          .then((userData) => {
            res.status(200).json(userData[0].ENTRIES);
          });
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  }

  module.exports = {
      handleImage: handleImage
  }