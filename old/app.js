var express = require('express');
var app = express();

app.use('/static', express.static('static'));

app.use('/', express.static('tracker'));

app.listen(3000, function () {
      console.log('Example app listening on port 3000!');
});
