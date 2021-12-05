const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/comments', {
  useNewUrlParser: true
});

// Create a scheme for comments in the database
const itemSchema = new mongoose.Schema({
  name: String,
  text: String,
  top5: Array,
});

// Create a model for comments in the database.
const Comment = mongoose.model('Comment', commentSchema);

// Get a list of all of the comments in the database.
app.get('/api/comments', async (req, res) => {
  try {
    let comments = await Comment.find();
    res.send(comments);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Create a new comment in the database
app.post('/api/comments', async (req, res) => {
  const comment = new Comment({
    name: req.body.name,
    text: req.body.text,
    top5: req.body.top5
  });
  try {
    await comment.save();
    res.send(comment);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen(3000, () => console.log('Server listening on port 3000!'));
