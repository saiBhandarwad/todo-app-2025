let todo_items = ['sai','ashish'];
let currentEditElementIndex = null

function add(event) {
    let input = document.getElementById("todo_input")

    if(event.target.innerHTML == 'edit'){
        event.target.innerHTML = 'add'
        if(currentEditElementIndex!=null){
            todo_items[currentEditElementIndex]= input.value
        }
    }else{
        todo_items.push(input.value)
    }
    input.value=""
    reloadTodoItems()
    
}

function reloadTodoItems() {
    let list_item_container = document.getElementById("list_item_container")
    list_item_container.innerHTML="";
    for (let i=0; i<todo_items.length; i++) {
        list_item_container.innerHTML += `<div class="list_item">
        <li>${todo_items[i]}</li>
        <div class="btn"><button onClick="editTodoItem(${i})">edit</button> <button onClick="deleteTodoItem(${i})">delete</button></div>
        </div>`
    }    
}

function editTodoItem(index){
    let todo_input = document.getElementById("todo_input")
    let add_btn = document.getElementById("add_btn")
    todo_input.value = todo_items[index]
    add_btn.innerHTML = "edit"
    currentEditElementIndex = index
    
}
function deleteTodoItem(i){
    todo_items = todo_items.filter((item, index)=>{
        if(index !== i) return item
    })    
    reloadTodoItems()
}