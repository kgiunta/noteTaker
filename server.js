const express = require("express");
const path = require("path");
const noteData = require("./db/db.json");
const routehtml = require("./routes/htmlRoute");
const routeApi = require("./routes/apiRoute");
const PORT = 3001;
// const uuid = require("./helper/id");

const app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use("/api", routeApi);
app.use("/", routehtml);

// app.post("/", (req, res) => {
//   // Log that a POST request was received
//   console.info(`${req.method} request received to add a review`);

//   // Destructuring assignment for the items in req.body
//   const { product, review, username } = req.body;

//   // If all the required properties are present
//   if (product && review && username) {
//     // Variable for the object we will save
//     const newReview = {
//       product,
//       review,
//       username,
//       // review_id: uuid(),
//     };

//     // Obtain existing reviews
//     fs.readFile("./db/reviews.json", "utf8", (err, data) => {
//       if (err) {
//         console.error(err);
//       } else {
//         // Convert string into JSON object
//         const parsedReviews = JSON.parse(data);

//         // Add a new review
//         parsedReviews.push(newReview);

//         // Write updated reviews back to the file
//         fs.writeFile(
//           "./db/reviews.json",
//           JSON.stringify(parsedReviews, null, 4),
//           (writeErr) =>
//             writeErr
//               ? console.error(writeErr)
//               : console.info("Successfully updated reviews!")
//         );
//       }
//     });

//     const response = {
//       status: "success",
//       body: newReview,
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

app.get("/api/notes", (req, res) => res.json(noteData));

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
