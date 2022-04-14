const router = require("express").Router();
// const noteData = require("../db/db.json");
const fs = require("fs");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);

// '/api/notes/
router.get("/notes", async (req, res) => {
  const noteData = await readFileAsync("db/db.json", "utf8");
  console.log(typeof noteData);
  res.json(JSON.parse(noteData));
});

module.exports = router;
