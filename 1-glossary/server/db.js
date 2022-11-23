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
  console.log('req.params', req.params.term);
  var x = req.params.term;
  Entry.find({$or: [ {term: {$regex: x, $options: 'i'}}, {definition: {$regex: x, $options: 'i'}} ]})
  .then((response) => {
    // console.log('RESPONSe in getMatch', response);
    res.status(200).send(response);
  })
};
const save = (req,res) => {
  // console.log('Data from saveDB ->', req.body);
  Entry.create(req.body)
  .then(() => res.status(201).end('Data entered...'))

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