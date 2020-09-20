const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
app = express();
app.use(bodyParser.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static('client'));
app.use(express.json())



app.post('/submit-form', (req, res) => {
  var csv = req.body.csvdata;
  console.log(csv)
  res.end(csv + ' submitted correctly' + JSON.stringify(req.body))
})



app.listen(5000, () => {
  console.log('Listening on post 5000...')
});