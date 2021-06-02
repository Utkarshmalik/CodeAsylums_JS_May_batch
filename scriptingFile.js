


const inputField=document.querySelector("#textField");
const submitButton=document.querySelector("#submitBtn");
const IncompleteList=document.querySelector("#incomplete-list");
const completeList=document.querySelector("#complete-list");


var incompleteItems=[];
var completedItems=[];


function onMoveButtonClick(e)
{

    const listId=e.target.parentElement.id;


   const completedListItem=incompleteItems.find((element)=>
    {
        return element.id==listId;
    })

    completedItems.push(completedListItem);

    incompleteItems=incompleteItems.filter((element)=>
    {
        return element.id!==listId;
    })

    renderIncompleteList(incompleteItems);
    renderCompleteList(completedItems);
}

function onDeleteButtonClick(e)
{
    const listId=e.target.parentElement.id;

    incompleteItems=incompleteItems.filter((element)=>
    {
        return element.id!==listId;
    })


    completedItems=completedItems.filter((element)=>
    {
        return element.id!==listId;
    })



    renderIncompleteList(incompleteItems);
    renderCompleteList(completedItems);
}

function renderIncompleteList(lists)
{
    IncompleteList.innerHTML='';

    lists.forEach((listItem)=>
    {
        IncompleteList.appendChild(listItem);
    })
}
function renderCompleteList(lists)
{

    completeList.innerHTML='';

    lists.forEach((listItem)=>
    {
        completeList.appendChild(listItem);
    })

}


submitButton.addEventListener("click",()=>
{
    const newDiv=document.createElement('div');
    newDiv.setAttribute("class","list-item");

    const num=Math.floor((Math.random() * 100000) + 1);
    newDiv.setAttribute("id",num.toString());


    const para=document.createElement('p');
    para.textContent=inputField.value;

    const DeleteButton=document.createElement('button');
    DeleteButton.setAttribute('class','btn');
    DeleteButton.textContent="Delete";

    DeleteButton.addEventListener("click",(e)=>onDeleteButtonClick(e));

    const MoveButton=document.createElement('button');
    MoveButton.setAttribute('class','btn');
    MoveButton.textContent="Mark as Done";
    
    MoveButton.addEventListener("click",(e)=>onMoveButtonClick(e));

    newDiv.appendChild(para);
    newDiv.appendChild(DeleteButton);
    newDiv.appendChild(MoveButton);
    IncompleteList.appendChild(newDiv);
    incompleteItems.push(newDiv);

})

console.log(incompleteItems);



