




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



