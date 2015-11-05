var arr = [];
for(var i = 0 ;i <= 100; i += 1){
  console.log ('i: '+i)
    console.log ('Geteilt0'(+i/0));
      console.log ('Geteilt2 '+(i/2));
        console.log ('geteilt4 '+(i/4));
          console.log ('geteilt6 '+(i/6));
            console.log ('geteilt8 '+(i/8));
              console.log ('modolo2 '+(i%2));
                console.log ('modolo3 '+(i%3));
                  console.log ('modolo4 '+(i%4));
                    console.log ('modolo5 '+(i%5));
                      console.log ('modolo6 '+(i%6));
                        console.log ('modolo7 '+(i%7));
                          console.log ('modolo8 '+(i%8));
                            console.log ('modolo9 '+(i%9));

  if (i%4 === 0){
    console.log ('Quadriert'+(i*i));
      }if (i%2 === 0){
        console.log ('X durch 2 teilbar');
          }if(i%3 === 0) {
            console.log ('X durch 3 teilbar');
              }if(i%4 === 0){
                console.log ('X durch 4 teilbar');
                  }if(i%5 === 0){
                    console.log ('X durch 5 teilbar');
                      }if(i%6 === 0){
                        console.log ('X durch 6 teilbar');
                      }if(i%7 === 0){
                    console.log ('X durch 7 teilbar');
                  }if(i%8 === 0){
                console.log ('X durch 8 teilbar');
              }if(i%9 === 0){
            console.log ('X durch 9 teilbar');
  }
  arr.push(i)
    console.log(arr);
      console.log ('Fertig');
}
