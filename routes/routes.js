const db = require('../db/connection');
const checkError = require('../utils/error');


module.exports = app => {


    // INSERT POSTS
    app.post('/addpost', (req, res) => {
        const post = req.body;

        if (!post) {
            res.status(400).send()
        }else {

        let sql = 'INSERT INTO posts SET ?'
        let query = db.query(sql, post, (err, result) => {
            checkError(err);
            console.log(result);
            res.json(post);
                })
            }
        });

    // select posts
    app.get('/selectposts', (req, res) => {
        let sql = 'SELECT * FROM posts';
        let query = db.query(sql, (err, results) => {
            checkError(err);
            console.log(results[0]);
            res.json(results.map(res => res));
        })
    })
    // select post
    app.get('/selectpost/:id', (req, res) => {
        let sql = `SELECT * FROM posts WHERE id = ${req.params.id}`;
        let query = db.query(sql, (err, result) => {
            checkError(err);
            res.json(result[0]);
        })
    })
    // update post content
    app.get('/updatepost/:id', (req, res) => {
        let body = "see ya lata aligata";
        let sql = `UPDATE posts SET body = '${body}' WHERE id = ${req.params.id}`
        let query = db.query(sql, (err, result) => {
            checkError(err);
            console.log(result);
            res.send(`post updated with body: ${body}`);
        })
    })

    // delete post
    app.get('/deletepost/:id', (req, res) => {
        let sql = `DELETE FROM posts WHERE id = ${req.params.id}`;
        let query = db.query(sql, (err, result) => {
            checkError(err);
            res.send(`post with id: ${req.params.id} deleted`);
        })
    })


}
