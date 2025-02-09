document.addEventListener('DOMContentLoaded', function() {
    // Handle task submission
    const taskForm = document.getElementById('taskForm');
    const tasks = document.getElementById('tasks');

    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = taskForm.name.value;
        const task = taskForm.task.value;

        const li = document.createElement('li');
        li.textContent = `${name}: ${task}`;
        tasks.appendChild(li);

        taskForm.reset();
    });

    // Handle task assignment (admin)
    const assignTaskForm = document.getElementById('assignTaskForm');
    const assignedTasks = document.getElementById('assignedTasks');

    assignTaskForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const assignee = assignTaskForm.assignee.value;
        const newTask = assignTaskForm.newTask.value;

        const li = document.createElement('li');
        li.textContent = `${assignee}: ${newTask}`;
        assignedTasks.appendChild(li);

        assignTaskForm.reset();
    });
});