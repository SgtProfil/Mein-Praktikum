var express = require('express');
var app = express();
var images = ['i1.jpg', 'i2.jpg', 'i3.png', 'i4.jpg', 'i5.jpg']

app.use(function(req, res, next) {
  console.log(req.url);
  next();
});
app.use('/', express.static(__dirname));
app.get('/speziell', function(req, res) {
    var zufaelligeZahl = randomBetween(0, 10);
    if (zufaelligeZahl > images.length) {
      res.status(404).sendfile(__dirname + '/error.html');
    }
    else if (zufaelligeZahl === images.length) {
      res.status(404).sendfile(__dirname + '/error.html');
    }
    else {
      res.sendfile(__dirname + '/' + (images[zufaelligeZahl]));
    }

        console.log('Eine Spezielle Datei wird ausgeliefert!');
});
app.get('/*', function(req, res) {
    res.status(404).sendfile(__dirname + '/error.html');
});
app.listen(64163);


function randomBetween(min, max) {
  var result = 0;
    if (min < 0) {
        result = min + Math.random() * (Math.abs(min)+max);
    }else {
        result = min + Math.random() * max;
    }

    result = parseInt(result);
    return result;
}
