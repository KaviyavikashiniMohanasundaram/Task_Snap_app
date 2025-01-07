// script.js
document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");

    // Add task
    addTaskButton.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const li = document.createElement("li");

        const radioButton = document.createElement("input");
        radioButton.type = "radio";
        radioButton.addEventListener("click", () => {
            li.classList.toggle("completed");
        });

        const taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;

        li.appendChild(radioButton);
        li.appendChild(taskSpan);
        taskList.appendChild(li);
        taskInput.value = "";
    });
});
