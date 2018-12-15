var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors')
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
extended: true
}));
var db = require('./database');
app.get('/api/products', db.getAllProducts);
// index page
app.get('/', function (req, res) {
res.send('Express is running');
});
app.get('/api/json', function (req, res) {
   var test={emp:"emp",active:"activate",time:"5"}
res.json(test);
    });

var port = process.env.PORT || 8080;
app.listen(port, function () {
console.log('App is running on http://localhost:' + port);
});