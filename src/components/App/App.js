import { useState } from 'react';
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';
import styles from './App.module.css'
import React, { useEffect } from 'react';

function App() {

const[ todos, setTodos] = useState([])
const[ allVisible, setAllVisible] = useState(true)
const[ visibleActive, setVisibleActive] = useState(false)
const[ visibleCompleted, setVisibleCompleted] = useState(false)

function addTask (task){
  const newTask ={
    id: Math.random(),
    task: task,
    completed: false
  }
  setTodos([...todos, newTask])
}
function handleDelete(item){
setTodos(todos.filter((element)=>element.id !== item.id))
}
function handleToggle(item){
setTodos(todos.map((elem)=>{
  if(elem.id === item.id){
    return{
      ...elem, completed: !elem.completed
    }
  }
  return elem;
}))
  
}
function saveLocalStorage(){
    localStorage.setItem('todos', JSON.stringify(todos))
}
useEffect(() => { 
  if (localStorage.getItem('todos') === null){
    console.log('NOL')
  }else{
    let todoLocal = JSON.parse(localStorage.getItem('todos'))
      setTodos(todoLocal)}
}, []);

function handleAllVisible(){
  setAllVisible(true)
  setVisibleActive(false)
  setVisibleCompleted(false)
}
function handleVisibleActive(){
  setVisibleActive(true)
  setAllVisible(false)
  setVisibleCompleted(false)
}
function handleVisibleCompleted(){
  setVisibleCompleted(true)
  setAllVisible(false)
  setVisibleActive(false)
}
  return (
    <div className={styles.App}>
<TodoForm
addTask={addTask} />
<div>
{todos.map((item)=>{
  return( <TodoList key={item.id} id={item.id} task={item.task} 
  completed={item.completed}  saveLocalStorage={saveLocalStorage}
  handleDelete={handleDelete} handleToggle={handleToggle} 
  allVisible={allVisible} visibleActive={visibleActive}
  visibleCompleted={visibleCompleted}/>)})}
  </div>
  <div>
  <p>Количество задач:  {todos.length}</p>
  <button onClick={handleAllVisible}>All</button>
  <button onClick={handleVisibleActive}>Active</button>
  <button onClick={handleVisibleCompleted}>Completed</button>
  </div>
    </div>
  );
}

export default App;
