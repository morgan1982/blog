const db = require('../db/connection');
const checkError = require('../utils/error');


const upload = require("../services/imageService");


module.exports = app => {

        app.post('/addimage', upload.single('sampleImage'), (req, res) => {
        // console.log(req.file);
        const imageUrl = req.file.path
                    .split('\\').join('/');
        // console.log(imageUrl);

        let sql = `INSERT INTO images (url, created) 
                   VALUES ('${imageUrl}', NOW())`

        let query = db.query(sql, (err, result) => {
            checkError(err);
            console.log(result);
        })
        res.send("image uploaded");
    })

}
