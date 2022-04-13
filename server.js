const express = require("express");
const path = require("path");
const noteData = require("./db/db.json");
const routehtml = require("./routes/htmlRoute");
const routeApi = require("./routes/apiRoute");
const PORT = 3001;
const id = require("./helper/id");
const { title } = require("process");
const { text } = require("express");
const { fstat } = require("fs");

const app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use("/api", routeApi);
app.use("/", routehtml);

// const { textNote, titleNote } = req.body;

// // If all the required properties are present
// if (textNote && titleNote) {
//   // Variable for the object we will save
//   const newNote = {
//     textNote,
//     titleNote,
//     note_id: id(),
//   };

//   // Obtain existing reviews
//   fs.readFile("./db/db.json", "utf8", (err, data) => {
//     if (err) {
//       console.error(err);
//     } else {
//       // Convert string into JSON object
//       const parsedNotes = JSON.parse(data);

//       // Add a new review
//       parsedNotes.push(newNote);

//       // Write updated reviews back to the file
//       fs.writeFile(
//         "./db/db.json",
//         JSON.stringify(parsedNotes, null, 4),
//         (writeErr) =>
//           writeErr
//             ? console.error(writeErr)
//             : console.info("Successfully updated note!")
//       );
//     }
//   });
//   const response = {
//     status: "success",
//     body: newNote,
//   };

//   console.log(response);
//   res.status(201).json(response);
// } else {
//   res.status(500).json("Error in posting");
// }

// if (title && text) {
//   const newNote = {
//     title,
//     text,
//     noteid: id(),
//   };
//   fs.readFile("./db/db.json","")
// }

// app.get("/notes", (req, res) => {
//   res.sendFile(path.join(__dirname, "./public/notes.html"));
// });

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "index.html"));
// });
// res.json(`${req.method} request received`);

app.get("/api/notes", (req, res) => res.json(noteData));

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
