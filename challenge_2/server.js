const express = require('express');
const bodyParser = require('body-parser')
app = express();
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('client'));

app.post('/submit-form', (req, res) => {
  const data = req.body.csvdata
  res.end(console.log(data))
})

app.listen(5000, () => {
  console.log('Listening on post 5000...')
});