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


const[ todosActivel, setTodosActive] = useState([])
const[ todosCompleted, setTodosCompleted] = useState([])
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
  console.log('handleActiveVisible')
  setTodosActive(todos.filter((el)=>{
    return !el.completed}))
  setVisibleActive(true)
  setAllVisible(false)
  setVisibleCompleted(false)
}
function handleVisibleCompleted(){
  console.log('setTodosCompleted')
  setTodosCompleted(todos.filter((el)=>{
    return el.completed}))
  setVisibleCompleted(true)
  setAllVisible(false)
  setVisibleActive(false)
}
console.log('todosActivel', todosActivel)
console.log('todosCompleted', todosCompleted)
console.log('todos', todos)

  return (
    <div className={styles.main}>
<TodoForm
addTask={addTask} />
<div>

{visibleCompleted
? todosCompleted.map((item)=>{
  return( <TodoList key={item.id} id={item.id} task={item.task} 
  completed={item.completed}  saveLocalStorage={saveLocalStorage}
  handleDelete={handleDelete} handleToggle={handleToggle} 
  allVisible={allVisible} visibleActive={visibleActive}
  visibleCompleted={visibleCompleted}/>)}) 
:visibleActive
? todosActivel.map((item)=>{
  return( <TodoList key={item.id} id={item.id} task={item.task} 
  completed={item.completed}  saveLocalStorage={saveLocalStorage}
  handleDelete={handleDelete} handleToggle={handleToggle} 
  allVisible={allVisible} visibleActive={visibleActive}
  visibleCompleted={visibleCompleted}/>)})
: todos.map((item)=>{
  return( <TodoList key={item.id} id={item.id} task={item.task} 
  completed={item.completed}  saveLocalStorage={saveLocalStorage}
  handleDelete={handleDelete} handleToggle={handleToggle} 
  allVisible={allVisible} visibleActive={visibleActive}
  visibleCompleted={visibleCompleted}/>)})
}





{/* {todos.map((item)=>{
  return( <TodoList key={item.id} id={item.id} task={item.task} 
  completed={item.completed}  saveLocalStorage={saveLocalStorage}
  handleDelete={handleDelete} handleToggle={handleToggle} 
  allVisible={allVisible} visibleActive={visibleActive}
  visibleCompleted={visibleCompleted}/>)})} */}
  </div>
  <div className={styles.footer}>
  <p>Количество задач:  {todos.length}</p>
  <button className={styles.button} onClick={handleAllVisible}>All</button>
  <button className={styles.button} onClick={handleVisibleActive}>Active</button>
  <button className={styles.button} onClick={handleVisibleCompleted}>Completed</button>
  </div>
    </div>
  );
}

export default App;
