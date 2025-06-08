function addTask() {
    var input = document.getElementById('taskInput');
    var taskText = input.value;
    var list = document.getElementById('taskList');

    if (taskText === "") {
        alert("Нельзя добавить пустую задачу!");
        return;
    }

    var newTask = document.createElement('li');
    newTask.innerText = taskText;

    newTask.onclick = function () {
        list.removeChild(newTask);
    }

    list.appendChild(newTask);

    input.value = "";
}