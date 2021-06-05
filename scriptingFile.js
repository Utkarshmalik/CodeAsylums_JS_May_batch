

// fetching / calling an API's
//Application Program INterface
//you                  waiters                 //(cook)
//frontend     --------------    //serverside :  -> database
//network call : 
//asynchrous call



//how are API calls being made in Javascript ?
//  fetch();



//userAge from the db 
// +5 
//return it the customer 

// const userAge=fetch("some URL");   //asynchronous : 
// userAge+=5;
// console.log(userAe);

//Promises :

// const newPromise=new Promise((resolve,reject)=>
// {
//     //here we will do the asycnhronous things 
//     setTimeout(() => {
//         console.log("done with asychronous task");
//         //callng a api to get the data
//         const userAge=5;
//         resolve(5);
//     }, 3000);
// });

// newPromise.then((userAge)=>
// {
//     userAge+=5;
//     console.log(userAge);
// })


const inputField=document.querySelector("#textField");
const submitButton=document.querySelector("#submitBtn");
const IncompleteList=document.querySelector("#incomplete-list");



submitButton.addEventListener("click",()=>
{

    const newDiv=document.createElement('div');
    newDiv.setAttribute("class","list-item");

    const para=document.createElement('p');
    para.textContent=inputField.value;

    const DeleteButton=document.createElement('button');
    DeleteButton.setAttribute('class','btn');
    DeleteButton.textContent="Delete";

    const MoveButton=document.createElement('button');
    MoveButton.setAttribute('class','btn');
    MoveButton.textContent="Mark as Done"; 

    newDiv.appendChild(para);
    newDiv.appendChild(DeleteButton);
    newDiv.appendChild(MoveButton);


    IncompleteList.appendChild(newDiv);
    
})

function renderIncompleteItem()
{
    IncompleteList.innerHTML='';

    incompleteItems.forEach( todoList => {

    
        const newDiv=document.createElement('div');
    newDiv.setAttribute("class","list-item");

    const para=document.createElement('p');
    para.textContent=todoList.title;

    const DeleteButton=document.createElement('button');
    DeleteButton.setAttribute('class','btn');
    DeleteButton.textContent="Delete";

    const MoveButton=document.createElement('button');
    MoveButton.setAttribute('class','btn');
    MoveButton.textContent="Mark as Done"; 

    newDiv.appendChild(para);
    newDiv.appendChild(DeleteButton);
    newDiv.appendChild(MoveButton);

    IncompleteList.appendChild(newDiv);

    });

}

fetch("https://jsonplaceholder.typicode.com/todos/")
.then((userData)=>userData.json())
.then(data=>{
    incompleteItems=data;
    renderIncompleteItem(incompleteItems);
})
.catch(()=>
{
    console.log("error occured");
})
