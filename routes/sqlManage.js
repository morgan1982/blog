const db = require('../db/connection');

module.exports = app => {

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
}
