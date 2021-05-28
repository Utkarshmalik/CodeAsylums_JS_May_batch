

//Closures




// ----------------
// message=Hi;
// sayHi:function

// ------------------
// {greeting:function()}



function greeting() {
    let message = 'Hi';

    function sayHi() {
        console.log(message);
    }

    return sayHi;
}
let hi = greeting();
hi();



// ---------------
// hi=sayHi
// greeting:finction 
