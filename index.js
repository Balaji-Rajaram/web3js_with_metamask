var express = require('express');
var app = express();
var path = require('path');
app.use(express.static('./public'));


//viewed at http://localhost:8080
app.get('/', function(req, res) {
   res.sendFile(path.join(__dirname + "./public/index.html"));
    //res.sendFile( path.join(__dirname,"public","index.html"));

});


app.listen(5000, () => {
    console.log('http://localhost:5000')
})