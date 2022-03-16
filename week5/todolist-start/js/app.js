window.addEventListener('load', init);
//Global VARS
let list;
let todoItems = [];


//Initialize the application
function init()
{
    let form = document.getElementById('todo-form');
    form.addEventListener('submit', formSubmitHandler);
    list = document.getElementById('list');
    //Add items saved in Local Storage (if there are any)
    fillFromLocalStorage();

    playField.addEventListener('click', todoItemClickHandler);
}

function formSubmitHandler(e){
    e.preventDefault();
    //Get input from user
    let fieldInput = document.getElementById('todo-field');
    let inputValue = fieldInput.value;
    //Add item to page
    addToList(inputValue);
    //Save items in Local Storage
    todoItems.push(inputValue);
    localStorage.setItem('todos', JSON.stringify(todoItems));
}

function addToList(item){
    let li = document.createElement('li');
    li.innerHTML = item;
    list.appendChild(li);
}


function fillFromLocalStorage() {
    if (localStorage.getItem('todos') !== null) {
        //Turn Local Storage back in array
        let itemString = localStorage.getItem('todos');
        todoItems = JSON.parse(itemString);
        //Display content of array
        for (let todoItem of todoItems) {
            addToList(todoItem);
        }
    }
}

function todoItemClickHandler(e) {
    let todoItem = e.target;

    //Check if the clicked element is a list item
    if (todoItem.nodeName !== "LI") {
        return;
    }
    let itemPos = todoItems.indexOf(todoItem.innerHTML);
    todoItems.splice(itemPos, 1);
    localStorage.removeItem('todos', JSON.stringify(todoItems));

    todoItem.remove()
}
