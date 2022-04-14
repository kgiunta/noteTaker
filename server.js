const express = require("express");
const path = require("path");
const noteData = require("./db/db.json");
const routehtml = require("./routes/htmlRoute");
const routeApi = require("./routes/apiRoute");
const PORT = process.env.PORT || 3001;
const id = require("./helper/id");

const app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use("/api", routeApi);
app.use("/", routehtml);

// app.post("/notes", (req, res) => {
//   // Log that a POST request was received
//   console.info(`${req.method} request received to add a review`);

//   // Destructuring assignment for the items in req.body
//   const { text, title } = req.body;

//   // If all the required properties are present
//   if (text && title) {
//     // Variable for the object we will save
//     const newtask = {
//       text,
//       title,
//       review_id: id(),
//     };

//     // Obtain existing reviews
//     fs.readFile("./db/db.json", "utf8", (err, data) => {
//       if (err) {
//         console.error(err);
//       } else {
//         // Convert string into JSON object
//         const parsedNotes = JSON.parse(data);

//         // Add a new review
//         parsedNotes.push(newtask);

//         // Write updated reviews back to the file
//         fs.writeFile(
//           "./db/db.json",
//           JSON.stringify(parsedNotes, null, 4),
//           (writeErr) =>
//             writeErr
//               ? console.error(writeErr)
//               : console.info("Successfully updated reviews!")
//         );
//       }
//     });

//     const response = {
//       status: "success",
//       body: newtask,
//     };

//     console.log(response);
//     res.status(201).json(response);
//   } else {
//     res.status(500).json("Error in posting review");
//   }
// });

// app.get("/notes", (req, res) => {
//   res.sendFile(path.join(__dirname, "./public/notes.html"));
// });

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "index.html"));
// });
// res.json(`${req.method} request received`);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
