let todo_items = [];
let currentEditElementIndex = null

function add(event) {
    let input = document.getElementById("todo_input")

    if (event.target.innerHTML == 'edit') {
        event.target.innerHTML = 'add'
        if (currentEditElementIndex != null) {
            todo_items[currentEditElementIndex] = input.value
        }
    } else {
        if (input.value.trim() == "") window.alert("type some text in the input")
        else todo_items.push(input.value)
    }
    input.value = ""
    reloadTodoItems()

}

function reloadTodoItems() {
    if (todo_items.length == 0) {

       let no_data_present = document.body?.contains(document?.getElementById("no_data"));

        let no_data = document.createElement("p")
        no_data.textContent = "No Todo Items Are Available...."
        no_data.id = "no_data"
        if(!no_data_present)document.getElementById("todo_container")?.appendChild(no_data)

    } else {
        document.getElementById("no_data")?.remove();

    }

    let list_item_container = document.getElementById("list_item_container")
    list_item_container.innerHTML = "";
    for (let i = 0; i < todo_items.length; i++) {
        list_item_container.innerHTML += `<div class="list_item">
        <li>${todo_items[i]}</li>
        <div class="btn"><button onClick="editTodoItem(${i})">edit</button> <button onClick="deleteTodoItem(${i})">delete</button></div>
        </div>`
    }
}

function editTodoItem(index) {
    let todo_input = document.getElementById("todo_input")
    let add_btn = document.getElementById("add_btn")
    todo_input.value = todo_items[index]
    add_btn.innerHTML = "edit"
    currentEditElementIndex = index

}
function deleteTodoItem(i) {
    todo_items = todo_items.filter((item, index) => {
        if (index !== i) return item
    })
    reloadTodoItems()
}