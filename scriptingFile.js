//global context
//global execution context 


//Every time you create a new function a new execution context is created on the top of it 



// x=20;
// y=10;
// result;
// add=undefined;



let x = 20,
    y = 10;

let result = add(x,y);
console.log(result);

var add = function(x, y) {
return x + y;
}

