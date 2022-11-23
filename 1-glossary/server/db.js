const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/glossary');
// 1. Use mongoose to establish a connection to MongoDB

// 2. Set up any schema and models needed by the app
const Entry = mongoose.model('Entry', mongoose.Schema({
  //objectID
  term: String,
  definition: String
}));
// 3. Export the models
// 4. Import the models into any modules that need them

const getAll = (req, res) => {
  Entry.find()
  .then((data) => {
    res.send(data);
  })
  // console.log('Getting inside GETALL\n\n', );
  // res.send(Entry.find());
  // res.send(Entry.find());
};
const getMatch = (req, res) => {

};
const save = (req,res) => {
  console.log('Data from saveDB ->', req.body);
  Entry.create(req.body);
  res.status(201).end();
};
const update = (req, res) => {

};
const deleteEntry = (req,res) => {

};


module.exports.model = Entry;
module.exports.getAll = getAll;
module.exports.getMatch = getMatch;
module.exports.save = save;
module.exports.update = update;
module.exports.deleteEntry = deleteEntry;