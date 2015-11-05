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
 console.log (randomBetween(1,5));
