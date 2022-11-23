require("dotenv").config();
const express = require("express");
const path = require("path");
const PORT = 1228; //process.env.PORT ||
const DButils = require('./db'); //model, getAll, getMatch, deleteEntry, save
const router = require('./routes.js');

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
// app.use(express.urlencoded());
app.use(express.json());
app.use('/glossary', router);

// app.post('/glossary', (req,res) => {
//   console.log('getting to POST in server with data->', req.body);//

// })

/****
 *
 *
 * Other routes here....
 *
 *
 */

app.listen(PORT);
console.log(`Listening at http://localhost:${PORT}`);
