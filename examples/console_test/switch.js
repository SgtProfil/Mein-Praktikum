var readline = require('readline');
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
  rl.question("Was ist 2-1?", function(answer) {
    // TODO: Log the answer in a database
  switch(answer) {
    case '1' :{
      console.log('Richtig');
        break;
    }case '2' : {
      console.log('Nah dran');
        break;
    }default:{
      console.log ('Fehler');
        break;
     }
  }
    rl.close();
});
