class Task{
    constructor(description){
        this.description= description
    }

    // Funcion para obtner la tarea en nuestro html
    getHtmlSource(){
        return `<div class="card"> <div class="card-body task"> ${this.description} </div> </div>`  
    }
}

//Clase derivada
class ImportantTask extends Task{
    constructor(description){
        super(description);
    }

    // Funcion para obtner la tarea en nuestro html
    getHtmlSource(){
        return `<div class="card"> <div class="card-body important-task"> ${this.description} </div> </div>` 
    }
}

//  Obtener elementos del DOM
const taskForm = document.getElementById('task-form')
const taskInput = document.getElementById('task-input')
const taskList = document.getElementById('task-list')
const importantInput = document.getElementById('important-input')

// Manejamos el envio del form para agregar una nueva tarea
taskForm.addEventListener('submit', (event)=>{
    event.preventDefault();

    // Obtener el valor de entrada input
    const descriptionTask = taskInput.value;


    // Crear un objeto tarea o tareaimportante, dependiendo de un checkbox 
    let task;
    if(importantInput.checked){
        task = new ImportantTask(descriptionTask)
    } else {
        task = new Task(descriptionTask);
    }

    // Agregar la representacion de HTML de latarea a la lista
    taskList.innerHTML += task.getHtmlSource();

    // Limpiar campo de entrada
    taskInput.value = ''
    importantInput.checked = false;
});

taskList.addEventListener('click', (event)=>{
    if (event.target.classList.contains('task')) {
        event.target.remove()
    }
})