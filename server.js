const express = require('express');
const app = express();
const cors = require('cors');
// We do this because the front end runs on 3000
const PORT = process.env.PORT || 3001;
// heroku gives a port that the app runs on so we set it equal to the environments process to ensure it deploys correctly

app.use(express.json());
app.use(cors());

const models = require('./models');


app.get('/', (req, res) => {
    res.json({ hello: 'hello world'})
});

app.get('/posts', (req, res) => {
    models.Blog_Posts.findAll({attributes: ['id', 'title', 'createdAt']}).then(all_posts => {
        res.json(all_posts)
    });
});

app.get('/posts/:id', (req, res) => {
    let id = parseInt(req.params.id);
    models.Blog_Posts.findByPk(id).then((post) => {
        if (!post) {
            res. json({erros: 'Invalid ID'})
        } else {
            res.json({title: post.title, body: post.body, createdAt: post.createdAt});
        };
    });
});

app.listen(PORT, () => {
    console.log(`app started on ${PORT}`)
});