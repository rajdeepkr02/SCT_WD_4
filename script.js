document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskDate = document.getElementById('task-date');
    const taskList = document.getElementById('task-list');

    const taskText = taskInput.value;
    const taskDateTime = taskDate.value;

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const listItem = document.createElement('li');

    listItem.innerHTML = `
        <span>${taskText} - <small>${new Date(taskDateTime).toLocaleString()}</small></span>
        <div>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
            <button class="complete-btn">Complete</button>
        </div>
    `;

    // Mark task as completed
    listItem.querySelector('.complete-btn').addEventListener('click', function() {
        listItem.classList.toggle('completed');
    });

    // Delete task
    listItem.querySelector('.delete-btn').addEventListener('click', function() {
        taskList.removeChild(listItem);
    });

    // Edit task
    listItem.querySelector('.edit-btn').addEventListener('click', function() {
        const newTaskText = prompt('Edit your task', taskText);
        const newTaskDate = prompt('Edit your date and time', taskDateTime);

        if (newTaskText !== null && newTaskText !== '') {
            listItem.querySelector('span').innerHTML = `${newTaskText} - <small>${new Date(newTaskDate).toLocaleString()}</small>`;
        }
    });

    taskList.appendChild(listItem);

    // Clear input fields
    taskInput.value = '';
    taskDate.value = '';
});
