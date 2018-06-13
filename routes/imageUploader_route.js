const db = require('../db/connection');
const checkError = require('../utils/error');


const upload = require("../services/imageService");


module.exports = app => {

    app.post('/addimage', upload.single('sampleImage'), (req, res) => {
        console.log("route!", req.file);
        const imageUrl = req.file.path
                    .split('\\').join('/');

        let sql = `INSERT INTO images (url, reg_date)
                   VALUES ('${imageUrl}', NOW())`

        let query = db.query(sql, (err, result) => {
            checkError(err);
            console.log(result);
        })
        res.send(req.file.filename);
    })

    app.get('/selectimage', (req, res) => {
        let sql = 'SELECT * FROM images WHERE id=5';
        let query = db.query(sql, (err, result) => {
            checkError(err);
            let imageUrl = result[0].url.split('/');
            const postImgUrl = imageUrl[2];
            console.log(postImgUrl);
            res.status(200).send(postImgUrl);

        })
    })

}
