const express = require('express');
const router = express.Router();

// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';


const riddlesDummy = [
        {id: 1, name: '7 Generals', difficulty: 10},
        {id: 2, name: 'Who is the fastest horse', difficulty: 6},
        {id: 3, name: 'Dwarfs and hats', difficulty: 3},
        {id: 4, name: 'Is castling allowed?', difficulty: 9},
        {id: 5, name: 'The rabbit inside the hat', difficulty: 1},
        {id: 6, name: 'Acrobat in a cave', difficulty: 7},
        {id: 7, name: '99 English and one Israeli on a plane', difficulty: 8},
        {id: 8, name: 'How many bricks till it falls?', difficulty: 5},
        {id: 9, name: '12 Coins on a scale', difficulty: 2},
        {id: 10, name: 'Find the poisoned wine ', difficulty: 4},
        {id: 11, name: 'Coins game on a circle table', difficulty: 9},
        {id: 12, name: 'Guess my 5th card', difficulty: 2},
      ];


/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

// Get all riddles
router.get('/riddles', (req, res) => {
    res.status(200).json(riddlesDummy);
});

// Get all riddles
router.get('/riddles/:id', (req, res) => {
    res.status(200).json(riddlesDummy.filter(riddle => riddle.id === +req.params.id));
});


// Get all posts
router.get('/posts', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  axios.get(`${API}/posts`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});

module.exports = router;
