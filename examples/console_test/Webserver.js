var express = require('express');
var app = express();
app.use(function(req, res, next) {
function randomBetween(min, max) {
    if (min < 0) {
        return min + Math.random() * (Math.abs(min)+max);
    }else {
        return min + Math.random() * max;
    }
}
randomBetween(1,5);
});
app.use('/', express.static(__dirname));
app.get('/speziell', function(req, res) {
    console.log('Eine Spezielle Datei wird ausgeliefert!');
    res.sendfile(__dirname + '/210543_700b_v1.jpg');
});
app.get('/*', function(req, res) {
    res.status(404).sendfile(__dirname + '/error.html');
});
app.listen(64163);
