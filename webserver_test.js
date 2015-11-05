var express = require('express');
var app = express();
var images = ['i1.jpg', 'i2.jpg', 'i3.png', 'i4.jpg', 'i5.jpg']

app.use(function(req, res, next) {
  console.log(req.url);
  next();
});
app.use('/', express.static(__dirname));
app.get('/speziell', function(req, res) {
    var zufaelligeZahl = randomBetween(0, 7);
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















<!DOCTYPE html>
<html>
<body style="background-color:light">

<h1 style="color:blue">Das ist eine blaue header Titel</h1>
<p style="font-size:200%">Das ist ein Text der auf 200% gestellt</p>
<svg height="200" width="500">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:rgb(255,0,150);stop-opacity:1" />
      <stop offset="100%" style="stop-color:rgb(255,110,0);stop-opacity:1" />
    </linearGradient>
  </defs>
  <ellipse cx="110" cy="72" rx="100" ry="70" fill="url(#grad1)" />
  <text fill="#ffffff" font-size="45" font-family="Verdana" x="50" y="86">SVEN</text>
</svg>
</body>
</html>
