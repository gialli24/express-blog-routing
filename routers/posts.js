const express = require("express");
const router = express.Router();

let posts = [
    {
        id: 1,
        title: 'Esplorando Node.js',
        content: 'Un primo post sul server Express con rotte statiche e JSON.',
        image: '/images/post-1.svg',
        tags: ['node', 'express', 'backend']
    },
    {
        id: 2,
        title: 'Post di programmazione',
        content: 'Condivido suggerimenti per migliorare il codice e la struttura del progetto.',
        image: '/images/post-2.svg',
        tags: ['programmazione', 'consigli', 'best-practice']
    },
    {
        id: 3,
        title: 'Routing in Express',
        content: 'Come definire rotte semplici e restituire JSON in un’app Node.',
        image: '/images/post-3.svg',
        tags: ['express', 'routing', 'api']
    },
    {
        id: 4,
        title: 'Asset statici',
        content: 'Serviamo immagini e file statici con il middleware integrato di Express.',
        image: '/images/post-4.svg',
        tags: ['static', 'assets', 'express']
    },
    {
        id: 5,
        title: 'Primo blog con Node',
        content: 'Una semplice bacheca in memoria per iniziare a costruire il blog.',
        image: '/images/post-5.svg',
        tags: ['blog', 'tutorial', 'start']
    }
];

// index
router.get('/', function (req, res) {
    res.json(posts);
});

// show
router.get('/:id', function (req, res) {

    const post = posts.find(post => post.id === parseInt(req.params.id));

    res.json(post);
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
    let deletedPost = {};
    let tempPosts = [];

    posts.forEach(post => {
        if (post.id === parseInt(req.params.id)) {
            deletedPost = post;
        } else {
            tempPosts.push(post);
        }
    })

    posts = tempPosts;

    res.json(deletedPost);
});


module.exports = router;