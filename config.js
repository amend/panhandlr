
var uri;
if (process.env.NODE && ~process.env.NODE.indexOf("heroku")) {
  uri = process.env.MONGODB_URI;
} else {
  uri = 'mongodb://localhost/traffic';
}

exports.mongodb = {
    'uri': uri,
    'auto_reconnect': true
};
