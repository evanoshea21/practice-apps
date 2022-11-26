const db = require('./db.js');

const utils = {

  post: (req,res) => {
    console.log('IN POST MODELS with DATA\n ', req.body);
    console.log('SESH ID\n ', req.session_id);
    var {name, email, password, line1, line2, city, state, zipcode, phone, credit, exp_date, cvv} = req.body;
    var inputsArr = [name, email, password, line1, line2, city, state, zipcode, phone, credit, exp_date, cvv];
    // const qryStr = `INSERT INTO responses (name, email, password, line_1, line_2, city, state, zipcode, phone, credit, exp_date, cvv) values(?,?,?,?,?,?,?,?,?,?,?,?)`;
    const qryStr2 = `INSERT INTO responses (name, email, password, line_1, line_2, city, state, zipcode, phone, credit, exp_date, cvv) values(?,?,?,?,?,?,?,?,?,?,?,?)`;
    db.query(qryStr2, [...inputsArr], (err, results, fields) => {
      console.log('Err,Results,Fields, ', err, results, fields);
      res.send('done posting?');
    })
  }
}

module.exports = utils;