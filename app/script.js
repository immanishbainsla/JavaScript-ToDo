// first select required elements using querySelector
// '.' signifies here that the element to be selected has this class
let todoInput = document.querySelector('.todo_input');
let todoButton = document.querySelector('.todo_button');
let todoList = document.querySelector('.todo_list');
let filterOption = document.querySelector('.filter_todo');

// now add event listeners to selected elements 
// which means whenever any selected event happens with seleceted elements
// it should respond
// addEventListener takes 2 inputs parameters
// 1. event name eg. "click" refers to onClick
// 2. function name eg. "addTodo" refers to function ...
// ... which is defined later which is used to perform the action on particular event

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("change", filterTodo);

// function to handle addition task of new Todo 
function addTodo(e){
    // prevents page from refreshing after submitting form
    e.preventDefault();

    // creatcreating a new element div for new todo and adding class to using using JS 
    let todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // listing new ToDo 
    // first create new tag and then take value from input field 
    // and then add newToDo to list 
    let newToDo = document.createElement('li');
    newToDo.innerText = todoInput.value;
    newToDo.classList.add('todo_item');
    todoDiv.appendChild(newToDo);

    if(todoInput.value == ""){
        return null;
    }

    // create check button for new todo
    let completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete_btn');
    todoDiv.appendChild(completedButton);

    // create delete button for todos 
    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add('delete_btn');
    todoDiv.appendChild(deleteButton);

    // finally add it to actual list 
    todoList.appendChild(todoDiv);

    // clear inout field value 
    todoInput.value = "";
}

// function to handle delete nd checking of tasks
function deleteCheck(e){
    let item = e.target;

    // handle deleting item
    if(item.classList[0] === "delete_btn") {
        // select parent div and then remove 
        let todo = item.parentElement;
        todo.remove();
    }

    // handling checking item 
    if(item.classList[0] === "complete_btn"){
        let todo = item.parentElement;
        todo.classList.toggle('completedItem');
    }
}

// finally function for handling filtering todo on the basis of select
function filterTodo(e) {
    // first store all items in todoList
    let todos = todoList.childNodes;
    // iterate over the todos to filter only required todo's
    for(let i = 0; i<todos.length; i++ ){
        if(e.target.value === "all"){
            // hide if filter parameter doesn't match
            todos[i].style.display = "flex";
        }
        else if(e.target.value === "completed"){
            todos[i].style.display = (todos[i].classList.contains('completedItem') ? "flex" : "none");
        }
        else{
            todos[i].style.display = (todos[i].classList.contains('completedItem') ? "none" : "flex");
        }
        // hiding not deleting, because display attribute value set to "none" means it will be there but won't occupy any space on screen
    }
} 