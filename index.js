require('dotenv').config();

const env = process.env.NODE_ENV || 'development';

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();


//DATABASE
const knexConfig = require('./knexfile');
const knex = require('knex')(knexConfig[env]);

//-----------------//

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

//QUERY FOR TWEETS
app.get('/api/tweets', (req,res) => {
  knex('tweets')
    .select('*')
    .orderBy('id')
    .asCallback((err, data) => {
      if (err) throw err;
      res.json(data);
    });
});

//UPDATE LIKE STATUS OF TWEETS
app.post('/api/likeTweet', (req,res) => {
  let likeStatus = parseInt(req.body.tweetlike)
  knex('tweets')
    .where('id', req.body.tweetid)
    .update({'like': likeStatus})
    .asCallback((err, result) => {
      knex('tweets')
        .select('*')
        .asCallback((err, data) => {
          if (err) throw err;
          res.json(data);
        });
      if (err) throw err;
    });
});


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;

app.listen(port);

console.log(`App listening on ${port}`);