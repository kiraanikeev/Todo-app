import React, { useState } from 'react';
import styles from './TodoForm.module.css';

function TodoForm(props) {

    const[task, setTask] = useState('')

function handleSubmit(e){
    e.preventDefault();
    props.addTask(task)
    
    setTask('')
}
function handleChange(e){
    setTask(e.target.value)
}


    return (
        <div className={styles.TodoForm}>
            <h1 className={styles.TodoForm0}>TODO LIST</h1>
            <form className={styles.TodoForm1} action="#" onSubmit={handleSubmit}>
            <input className={styles.TodoForm2} type="text"placeholder="What do you need to do?"
             required minLength={2} maxLength={40} onChange={handleChange} value={task}/>
            <button className={styles.TodoForm3} type="submit">PUSH</button>
            </form>
     
        </div>
    )
}

export default TodoForm
