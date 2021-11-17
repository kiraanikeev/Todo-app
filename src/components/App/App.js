import { useState } from 'react';
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';
import styles from './App.module.css'
import React, { useEffect } from 'react';


function App() {

const[ todos, setTodos] = useState([])
const [editName, setEditName] = useState('')
const [todoEditing, setTodoEditing] = useState(null);

function addTask (task){
  const newTask ={
    id: Math.random(),
    task: task,
    completed: false
  }
  setTodos([...todos, newTask])
}

function handleDelete(id){
setTodos(todos.filter((element)=>element.id !== id))
}

function handleToggle(id){
setTodos(todos.map((elem)=>{
  if(elem.id === id){
    return{
      ...elem, completed: !elem.completed
    }
  }
  return elem;
}))
}

function handleEdit(id){
  setTodos(todos.map((elem)=>{
    if(elem.id === id){
      return{
        ...elem, task: editName
      }
    }
    return elem
  }))
  setTodoEditing(null)
}



useEffect(() => {
  const save = localStorage.getItem("todos");
  const loadedTodos = JSON.parse(save);
  if (loadedTodos) {
    setTodos(loadedTodos);
  }
}, []);

useEffect(() => {
  const save = JSON.stringify(todos);
  localStorage.setItem("todos", save);
}, [todos]);


  return (
    <div className={styles.main}>
<TodoForm
addTask={addTask} />
<div>

{todos.map((item)=>{
  return( <TodoList key={item.id} id={item.id} task={item.task} 
  completed={item.completed} 
  handleDelete={handleDelete} handleToggle={handleToggle} 
  handleEdit={handleEdit} setTodoEditing={setTodoEditing}
  todoEditing={todoEditing} setEditName={setEditName}
  />)})}
  </div>
  <div className={styles.footer}>
  <p>Количество задач:  {todos.length}</p>

  </div>

    </div>
  );
}

export default App;
