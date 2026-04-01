const express = require("express");
const router = express.Router();


// index
router.get('/', function (req, res) {
    res.send('Posts list');
});

// show
router.get('/:id', function (req, res) {
    res.send('Post with id ' + req.params.id);
});

// store
router.post('/', function (req, res) {
    res.send('Creating post');
});

// update
router.put('/:id', function (req, res) {
    res.send('Update post with id ' + req.params.id);
});

// modify
router.patch('/:id', function (req, res) {
    res.send('Modify post with id ' + req.params.id);
});

// destroy
router.delete('/:id', function (req, res) {
    res.send('Deleting post with id ' + req.params.id);
});


module.exports = router;