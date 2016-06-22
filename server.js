
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

var routes = require('./routes/index');

app.use('/', routes);

app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function(){
  console.log('Server started on port '+app.get('port'));
});