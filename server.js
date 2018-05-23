const express = require('express');
const app = express();
const checkError = require('./utils/error');
const mysql = require('mysql');


// CONNECTION TO MYSQL SERVER
const { sql: { host, user, password, database, port} } = require('./config/keys');


const db = mysql.createConnection({
    host,
    port,
    user,
    password,    
    database
});


db.connect((err) => {
    if(err){
        throw err;
    }
    console.log(`connected to ${database}..`);
})
// drop tables by name
app.get('/droptable/:table', (req, res) => {
    const table = req.params.table;
    console.log("the table", table);
    let sql = `DROP TABLE ${table}`;
    db.query(sql, (err, result) => {
        checkError(err);
        console.log(result);
        res.send(`table ${table} deleted..`)
    })
})
// creates posts table
app.get('/createpost', (req, res) => {
    let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), categories VARCHAR(255), body VARCHAR(255), PRIMARY KEY (id))';
    db.query(sql, (err, result) => {
        checkError(err);
        console.log(result);
        res.send('table created..');
    })
})

// insert post 1
app.get('/addpost1', (req, res) => {
    let post = {
        title: "post 1",
        categories: "health",
        body: "this is the first post"
    }
    let sql = 'INSERT INTO posts SET ?';
    let query = db.query(sql, post, (err, result) => {
        checkError(err);
        console.log(result);
        res.send('post 1 created');
    })
})
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
// have to get rid off it
app.get('/api/customers', (req, res) => {
    const customers = [
        {id: 1, firstName: 'John', lastName: 'Doe'},
        {id: 2, firstName: 'Tono', lastName: 'Eliot'},
        {id: 3, firstName: 'Renak', lastName: 'Samol'},        
    ];

    res.json(customers);
})


const nodePort = 5000;
app.listen(nodePort, () => console.log(`Server started on ${nodePort}`));
