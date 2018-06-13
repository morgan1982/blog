const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const path = require('path');


// MIDDLEWARE

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
// console.log(path.join(__dirname, "/public/uploads"));
const imageUrl = path.join(__dirname, "public/uploads").split("\\").join("/");
console.log(imageUrl);
// app.use('/images', express.static(path.join(__dirname, "public/uploads")));
app.use('/images', express.static(imageUrl));

// for images storage
// app.use(bodyparser({keepExtensions: true, uploadDir: __dirname + '/client/images'})) // folder outside assets is used


//Public folder
// app.use(express.static(path.join(__dirname, '/public/uploads/')));


//ROUTES
require("./routes/routes")(app);
require("./routes/sqlManage")(app);
require("./routes/imageUploader_route")(app);



const nodePort = 5000;
app.listen(nodePort, () => console.log(`Server started on ${nodePort}`));
