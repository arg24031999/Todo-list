/*const inputbox= document.getElementById("input-box");
const listContainer= document.getElementById("list-container");
function addTask(){
    if(inputbox.value===''){
        alert("Task is empty");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML= inputbox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputbox.value='';
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();*/
const inputbox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const totalTasksElement = document.getElementById("total-tasks");
const completedTasksElement = document.getElementById("completed-tasks");
const tasksLeftElement = document.getElementById("tasks-left");

function addTask() {
    if (inputbox.value === '') {
        alert("Task is empty");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = '';
    updateTaskCount();
    saveData();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        updateTaskCount();
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        updateTaskCount();
        saveData();
    }
}, false);

function updateTaskCount() {
    const totalTasks = listContainer.querySelectorAll("li").length;
    const completedTasks = listContainer.querySelectorAll("li.checked").length;
    const tasksLeft = totalTasks - completedTasks;

    totalTasksElement.textContent = totalTasks;
    completedTasksElement.textContent = completedTasks;
    tasksLeftElement.textContent = tasksLeft;
}

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
    updateTaskCount();
}
const completeAllBtn = document.getElementById("complete-all");
const clearCompletedBtn = document.getElementById("clear-completed");

completeAllBtn.addEventListener("click", function () {
    const tasks = listContainer.querySelectorAll("li");
    tasks.forEach(task => {
        task.classList.add("checked");
    });
    updateTaskCount();
    saveData();
});
clearCompletedBtn.addEventListener("click", function () {
    const completedTasks = listContainer.querySelectorAll("li.checked");
    completedTasks.forEach(task => {
        task.remove();
    });
    updateTaskCount();
    saveData();
});
showTask();
