const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("user 다아아아아아");
});

module.exports = router;
