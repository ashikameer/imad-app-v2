var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var articleOne={
    title:'Article One',
    heading:'Article One',
    date:' Mar 13,2017',
    content:`<p>
                This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.
            </p>
            <p>
                This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.
            </p>
            <p>
                    This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.
            </p>
            
            <p>
                This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.
            </p>
            <p>
                This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.
            <p>
                    This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.
            </p>`,
};
function createTemp(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    var htmlTemplate=`<html>
                            <head>
                                <title>
                                   ${title}
                                </title>
                                <link href="/ui/style.css" rel="stylesheet"/>
                            </head>
                            <body>
                                <div>
                                    <a href="/">Home</a>
                                </div>
                                <hr/>
                                <h3>
                                    ${heading}
                                </h3>
                                <div>
                                    ${date}   
                                </div>
                                <div class="container">
                                    ${content}
                                </div>
                            </body>
                        </html>`
    return htmlTemplate;                    
} 

app.get('/article-one', function (req, res) {
  res.send(createTemp(article-one));
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
