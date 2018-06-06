const mysql = require('mysql');
const checkError = require('../utils/error');


// const { sql: { host, user, password, database, port} } = require('../config/keys');
const { sql_local: { host, user, password, database, port} } = require('../config/keys');



const db = mysql.createConnection({
    host,
    port,
    user,
    password,    
    database
});


// db.connect((err) => {
//     if(err){
//         throw err;
//     }
//     console.log(`connected to ${database}..`);
// })
try {
    db.connect(() => {
        console.log(`connected to ${database}` )
    });
}
catch(error) {
    console.log(error);
}

module.exports = db;
