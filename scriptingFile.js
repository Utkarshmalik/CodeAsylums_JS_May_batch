


// let scores=new Array();
// let names=new Array(10);

// let marks=new Array(1,5,6,3,2);

//let arrayName=[element1,element2,element3..];


// let students=['utkarsh','Rahul','Rohit','lokesh'];


// console.log(students[0]);
// console.log(students[1]);

// students[3]='mohan';

// console.log(students);



//students.push('shreya');

//console.log(students);

// students.unshift('shrey');

// console.log(students);

//     students.pop();

//     console.log(students);


//     students.shift();
//     console.log(students);



// let index=students.indexOf('Rohit');



// console.log(students.length);




//Array.splice(position,num)

// let students=['utkarsh','Rahul','Rohit','lokesh'];


// let marks=[1,2,3,4,5,6];

// let deletedMarks=marks.splice(1,2);

// console.log(marks);
// console.log(deletedMarks);



//Array.splice(position,0,new_element_1,new_element_2);



// let updatedMarks=marks.splice(3,0,8,9,40,50);

// console.log(marks);
// console.log(updatedMarks);

// let updatedMarks=marks.splice(1,1,100);

// console.log(marks);



// let numbers=[0,100,34,5,3,1,50,67];


// console.log(numbers);

//array.sort(comparefunction)

// function compare(a,b)
// {

// }

// < 0 -> a will come first
// >0  -> b will come first 
// 0 

// numbers.sort( function (a,b){

//     if(a<b)
//     return -1;

//     if(a>b)
//     return 1;

//     return 0;
  
// } );


// console.log(numbers);


// let employess=[{name:"Utkarsh",age:25,salary:500},{name:"Rahul",age:22,salary:100},{name:"Rohit",age:45,salary:40},{name:"Hitesh",age:15,salary:1000}];




// employess.sort( function (a,b) {

//     if(a.salary<b.salary)
//     return 1;

//     if(a.salary>b.salary)
//     return -1;

//     return 0;

// } );

// console.log(employess);


//filter()


// let filtertedEmployees=employess.filter(function (a) {
//     return a.salary>=500;
// });

// console.log(filtertedEmployees);


//forEach 


// for(let i=0;i<employess.length;i++)
// {
//     console.log(employess[i]);
// }

// employess.forEach(function (value,index) {

//     console.log(index);
//     console.log(value);
// });

//map

// let arr=[1,2,3,4,5,6,7];

// // arr.forEach(function (value,index) {
// //     arr[index]=value*5;
// // });

// // console.log(arr);

// let newArray=arr.map(function (value,index) {

//     return value*5; 
// })

// console.log(newArray);

// alert("Hello");
// console.log("hello");




// function add(a,b)
// {
//     return a+b;
// }


// const x=add(1,5);

// console.log(x);


// //parameters , arguements 


// function randomFunction() {
//     console.log("Hello");
// }


// const y=randomFunction();

// console.log(y);




//arguements object 







// function add()
// {

//     let sum=0;

//     for(let i=0;i<arguments.length;i++)
//     {
//         sum+=arguments[i];   
//     }

//     return sum;
// }




// console.log(add(1));
// console.log(add(1,3));
// console.log(add(4,7,89));
// console.log(add(2,5,1,90));




//Functions in Javascript are first class citizens


// function add(a,b) {
    
//     return a+b;
// }

// let sum=add;


// let result=sum(10,20);

// console.log(result);


// function average(a,b,sumFun)
// {
//     return sumFun(a,b)/2;
// }

// let newResult=average(10,20,sum);

// console.log(newResult);


// function multiply(a,b)
// {
//     return a*b;
// }

// function multiplyByFive(a)
// {
//     return multiply(5,a);
// }


// console.log(multiplyByFive(6));
// console.log(multiplyByFive(7));


//anonymous functions



// let show=function(){
//     console.log("Hello");
// }



//IIFE  -> Immidiately Invoked function expressions


// (function() {

//     console.log("Hello")
// })();


// let person={
//     name:"Utkarsh",
//     age:25
// };


// (function () {
//         console.log(`${person.name} is ${person.age} years old`)
//     }
// )();




//arrow functions (ES6)


// let add=function (a,b) {
//     return a+b;
// }


// let add= (a,b)=>{

//     return a+b;
// }


// let someFun=()=>
// {
//     console.log("Inside a function body");
// }

//Callback

//A callback is a function passed into another 
//function as an argument to be executed later

// let numbers=[1,2,4,5,6,9,10,15];


// function checkOddNumber(num)
// {
//     return num%2;
// }


// const oddNumbers=numbers.filter(checkOddNumber);


// console.log(oddNumbers);