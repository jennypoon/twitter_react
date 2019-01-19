require('dotenv').config();

const env = process.env.NODE_ENV || 'development';

const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();


//DATABASE
const knexConfig = require('./knexfile');
const knex = require('knex')(knexConfig[env]);

//-----------------//

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

//QUERY FOR RSVP
app.get('/api/tweets', (req,res) => {
  knex('tweets')
    .select('*')
    .asCallback((err, data) => {
      console.log("QUERY DONE")
      console.log(data)
      if (err) throw err;
      res.json(data);
    });
});


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;

app.listen(port);

console.log(`App listening on ${port}`);