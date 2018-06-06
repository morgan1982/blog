const express = require('express');
const app = express();
const bodyparser = require('body-parser');



// MIDDLEWARE
app.use(bodyparser.json());
// for images storage
app.use(bodyparser({keepExtensions: true, uploadDir: __dirname + '/client/images'})) // folder outside assets is used

//ROUTES
require("./routes/routes")(app);
require("./routes/sqlManage")(app);
require("./routes/imageUploader")(app);



const nodePort = 5000;
app.listen(nodePort, () => console.log(`Server started on ${nodePort}`));
