//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'

import React, { useState } from "react"

function App() {
  const [tasks, setTaks] = useState([]);
  const[newTask, setNewTask] = useState('');

const handleInputChange = (event) =>{
  setNewTask(event.target.value);
};

const handIeAddTask = () =>{
  if (newTask.trim() !== '') {
    setTaks([...tasks, newTask]);
    setNewTask('');
  }
};

const handleDeleteTask = (index) =>{
  const updatedTasks = [...tasks];
  updatedTasks.splice(index, 1);
  setTasks(updatedTasks);
}

return(
  <div>
    <h1>Lista de Tareas</h1>
    <input
    type="text"
    placeholder="Agragar tarea"
    value={newTask}
    onChange={handleInputChange}
    />
    <button onClick={handleInputChange}>Agregar tarea</button>
    <ul>
      {tasks.map((tasks, index) => (
        <li key={index}>
        {tasks}
        <button onClick={() => handleDeleteTask(index)}>Eliminar</button>
        </li>
      ))}
      </ul>
    </div>
);
};


export default App

