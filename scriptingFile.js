

//objects and prototypes


//Constructor Functions


//this is used inside of construcotr function : this points to the object/instance of that function

function Person(firstName,lastName){
    this.firstName=firstName;
    this.lastName=lastName;
}

Person.prototype.getFullName=function name() {
    return this.firstName + " " + this.lastName;

}

console.log(Person);



console.log(Person.prototype);


     let person1= new  Person("Utkarsh","Malik");
      let person2=new Person("Rahul","Jain");

      console.log(person1.toString());
      console.log(person2);
     
       console.log(person1.getFullName());
       console.log(person2.getFullName());


       //Person.prototype
       console.log(person1.__proto__.__proto__);





//protypes


let arr=[1,2,3,4,5];

console.log(arr.toString());


