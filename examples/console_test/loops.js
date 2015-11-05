function personEingeben() {

}

console.log('Hallo');
  var i = 0;
    while (i < 10) {
      console.log('Ich leb noch');
        i += 1;
}
for(;;) {
  console.log('Hallo');
}
for(var i=0; i < 10; i += 2){
  console.log (i);
}
var num = 1;
  var arr = [];
    arr.push(8);
      arr.push(9);
        arr.push(1);
          console.log (arr);
            arr.forEach(function(element) {
              console.log(element);
});

var dict = {};
dict['key'] = 0;
dict['key'] = 42;

var person = {
  'name': 'sven',
  'age': 15,
  'hair_color': 'brown'
};

person['name'] = 'ballauf';

console.log(person['age']);
