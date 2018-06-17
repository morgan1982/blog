const db = require('../db/connection');
const checkError = require('../utils/error');


const upload = require("../services/imageService");


module.exports = app => {

    app.post('/addimage', upload.single("sampleImage"), (req, res) => {
        // console.log("route!", req.file);
        const imageName = req.body.name;
        const category = req.body.category;
        // sampleimage is the fieldname.
        // const imageUrl = req.file.path
        //             .split('\\').join('/');
        const image_raw_url = req.file.path.split('\\');
        const imageUrl = image_raw_url[2];

        let sql = `INSERT INTO images (url, name, category, reg_date)
                   VALUES ('${imageUrl}','${imageName}', '${category}', NOW())`

        let query = db.query(sql, (err, result) => {
            checkError(err);
            // console.log(result);
        })
        const response = {
            name: imageName,
            url: imageUrl
        }
        res.send(response);
    })
    app.post('/test_upload', upload.single('sampleImage'), (req, res) => {

        console.log("file", req.file);
        console.log("body", req.body);
        res.send("ok from testing upload back")
    })

    app.get('/selectimage', (req, res) => {
        let sql = 'SELECT * FROM images WHERE id=5';
        let query = db.query(sql, (err, result) => {
            checkError(err);
            let imageUrl = result[0].url.split('/'); // use the filename instead
            // remove this logic!
            const postImgUrl = imageUrl[2];
            console.log(postImgUrl);
            res.status(200).send(postImgUrl);

        })
    })

}
