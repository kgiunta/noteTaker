const router = require("express").Router();

// '/api/notes/
router.get("/notes", (req, res) => res.json(noteData));

module.exports = router;
