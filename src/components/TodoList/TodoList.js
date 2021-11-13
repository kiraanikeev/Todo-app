import React from 'react'
import styles from './TodoList.module.css'

function TodoList(props) {

function deleteClick(){
    props.handleDelete(props)
}
function toggleClick(){
    props.handleToggle(props)

console.log(props)
}

    props.saveLocalStorage()
    return (<div>
        
        <div className={props.allVisible ? styles.visible : styles.unVisible}>
            <p className={!props.completed ? styles.active :styles.completed}>
                {props.task}</p>
            <button onClick={toggleClick}>completed</button>
            <button onClick={deleteClick}>delete</button>
        </div>
       
        <div className={props.visibleActive ? styles.visible :styles.unVisible}>
        <p className={props.completed ? styles.unVisible :styles.active}>
            {props.task}</p>
        <button onClick={toggleClick}>completed</button>
        <button onClick={deleteClick}>delete</button>
    </div>
       
        <div className={props.visibleCompleted ? styles.visible :styles.unVisible}>
        <p className={props.completed ? styles.completed : styles.unVisible}>
            {props.task}</p>
        <button onClick={toggleClick}>completed</button>
        <button onClick={deleteClick}>delete</button>
    </div>


    </div>
    )
}

export default TodoList
