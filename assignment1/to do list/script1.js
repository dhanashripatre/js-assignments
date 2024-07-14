function addTask() {
    //variable declaration
    const taskInput = document.getElementById('new-task');//get the input where the user enters a new task
    const taskList = document.getElementById('task-list');//task will be added here

    if (taskInput.value.trim() !== "") {
        //creating a new element to represent task
        const listItem = document.createElement('li');
        //Creates a new input element.
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.onclick = function() {
            if (checkbox.checked) {
                listItem.classList.add('completed');
            } else {
                listItem.classList.remove('completed');
            }
        };
        //
        const taskText = document.createElement('task');
        //element to display the text content of the task.
        taskText.textContent = taskInput.value;
        //Sets the text content of the task element to the value entered in the input field
    
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            taskList.removeChild(listItem);
        };

        listItem.appendChild(checkbox);
        listItem.appendChild(taskText);
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);

        taskInput.value = '';
    }
}
