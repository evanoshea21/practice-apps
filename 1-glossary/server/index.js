require("dotenv").config();
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 1228

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

/****
 *
 *
 * Other routes here....
 *
 *
 */

app.listen(PORT);
console.log(`Listening at http://localhost:${PORT}`);
