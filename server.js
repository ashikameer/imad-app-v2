var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var Pool = require('pg').Pool; 

var counter = 0;

var config = {
  user : 'ashikameer',
  database : 'ashikameer',
  host : 'db.imad.hasura-app.io',
  port : '5432',
  password : process.env.DB_PASSWORD
};
var pool = new Pool(config);

app.get('/test-db', function (req, res) {
  pool.query('SELECT * FROM "Article"', function(err, result){  
    if(err){
      res.status(500).send(err.toString());
    } else {
    res.send(JSON.stringify(result.rows));
    }
  });
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

var names=[];
app.get('/submit-name:name', function (req, res) {
  var name=req.params.name;
  names.push(name);
  res.send(JSON.stringify(names));
});
app.get('/counter', function (req, res) {
  counter=counter+1 ;
  res.send(counter.toString());
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
