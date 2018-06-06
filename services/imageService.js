// upload images service
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, './uploads/'); // where the index.js is?
    },
    filename: function(req, file, callback) {
        callback(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
    }
})
const fileFilter = (req, file, callback) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        callback(null, true); // accepts the file
    } else {
        callback(null, false); // rejects
        console.log('rejected');
    }
}

module.exports = multer({ storage, // storage: storage
                        limits: {
                            fileSize: 1024 * 1024 * 5
                        },
                        fileFilter
                    });
