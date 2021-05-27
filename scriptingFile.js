

//call apply and bind 



//these are function methods

let cat = {type: 'Cat', sound: 'Meow'};
let dog = {type: 'Dog', sound: 'Woof'};

let say = function (greeting,anotherGreeting) {
    console.log(greeting);
    // access current this
    console.log(this.type + ' says ' + this.sound);
};


// //first arguemnt in call apply and 
// //bind tells what should be the value of this inside of that function 

// say('Hello',"Hii");
// say.call(cat,"Hello","Hiii");
// say.apply(dog,["Hello","Hii"]);



// //bind
//  const newFun=say.bind(cat,"Hii","Hello");

//  newFun();

let car = {
    speed: 5,
    start: function() {
        console.log('Start with ' + this.speed + ' km/h');
    }
};

let aircraft = {
    speed: 10,
    fly: function() {
        console.log('Flying');
    }
};


let startAircraft=car.start.bind(aircraft);


startAircraft();







