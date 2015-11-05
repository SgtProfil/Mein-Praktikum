console.log ('Hey, ');
  var readline = require('readline');
    var rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
});
rl.question("Wie gehts dir? ", function(answer) {
  // TODO: Log the answer in a database
    if (answer === 'Gut') {
      console.log('Cool mir auch');
        }else if  (answer === 'Schlecht') {
          console.log ('Das tut mir Leid für dich');
            }if (answer === 'Gut und dir?') {
              console.log ('Mir auch')
                }if (answer === 'Super' ) {
                  console.log ('Cool bei dir läuft');
                    }if (answer === 'Gut und dir?') {
                      console.log ('Mir auch')
  }
  rl.close();
});
