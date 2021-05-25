



//key : string
//value  : 


//function , methods


//this inside of methods references the object who invoked that method

// //this is a keyword in javascript 

// let person={
//     Firstname:"Utkarsh",
//     lastName:"Malik",
//     age:25,
//     status:'single',
//     height:'180cm',
//     getFullName:function() {
        
//         return this.Firstname + " " + this.lastName;
//     }
// }


// console.log(person.getFullName());



// const array=[10,20,340,53,50,60,30];


//array.reduce;


// const result=array.reduce( (accumulator,currentValue)=>
// {
//     return accumulator*currentValue;
// } ,1);

// acculumulator,currentValue 

// -0

// firstIteration : 0,10 => 10 
// secondIteration:10,20 =>30
// thirdIteraton: 30,340 -> 370
//                370+53


//                  500+30: 530





// console.log(result);





// function getNames()
// {
//     let Firstname="Utkarsh";
//     let lastName="Malik";

//     return [Firstname,lastName];
// }


// let names=getNames();

// console.log(names);



function getNames()
{
     let Firstname="Utkarsh";
     let lastName="Malik";

     return {
         Firstname,
         lastName
     }
}


console.log(getNames());