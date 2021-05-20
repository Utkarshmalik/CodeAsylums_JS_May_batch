


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



let numbers=[0,100,34,5,3,1,50,67];


console.log(numbers);

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


let employess=[{name:"Utkarsh",age:25,salary:500},{name:"Rahul",age:22,salary:100},{name:"Rohit",age:45,salary:40},{name:"Hitesh",age:15,salary:1000}];




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

let arr=[1,2,3,4,5,6,7];

// arr.forEach(function (value,index) {
//     arr[index]=value*5;
// });

// console.log(arr);

let newArray=arr.map(function (value,index) {

    return value*5; 
})

console.log(newArray);