var express = require('express'),
    config = require('./config'),
    mongoose = require('mongoose'),
    http = require('http');

var app = express();

app.db = mongoose.createConnection(config.mongodb.uri);
app.db.on('error', console.error.bind(console, 'mongoose connection error: '));
app.db.once('open', function () {
	//and... we have a data store
});

console.log('going to set up schemas');
require('./models')(app, mongoose);



app.use(express.static(__dirname + '/public'));
app.engine('.html', require('jade').render);

app.get('/', require('./routes/index').init);
app.post('/getintersections', require('./routes/intersections.js').getIntersections);
//app.post('/gettweets', require('./routes/tweets').getTweets);

app.listen(3000);
console.log('listening on port 3000...');
