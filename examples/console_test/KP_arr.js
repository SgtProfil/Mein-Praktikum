var arr = ['Kai', 'Jan', 'Thorben', 'Samuel', 'Sammy', 'Hendrik', 'Ernst', 'Paul', 'Norbert'];


for(var i=0; i<arr.length;i +=2 ){
//console.log(arr[i]);
}
var i = 0;
  while (i <arr.length) {
    i += 2;
      console.log(arr[i]);
}
arr.forEach(function(element, index) {

  //% = modolo
if (i%2 === 0){
  console.log(element);

}});












var readline = require('readline');
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
  rl.question("Hat es funktioniert?", function(answer) {
    // TODO: Log the answer in a database
  switch(answer) {
    case 'ja' :{
      console.log('Nice!!!');
        break;
}         case 'nein' : {
            console.log('Schade! pls try again');
              break;
}}});
