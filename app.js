var express = require('express');
var app = express();
var port = 3000;

app.use(express.static('public'));
app.use(express.static('src/views'));

app.listen(port, function(){
    console.log(`Running Node Server on Port ${port}`);
});

