const express = require('express');
const router = express.Router();

// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';


const riddlesDummy = [
        {id: 1, name: 'generals'},
        {id: 2, name: 'horses'},
        {id: 3, name: 'dwarfs'}
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
