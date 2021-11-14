import React from 'react'
import styles from './TodoList.module.css'

function TodoList(props) {

function deleteClick(){
    props.handleDelete(props)
}
function toggleClick(){
    props.handleToggle(props)
}
    props.saveLocalStorage()
    return (<div className={styles.list}>
        
        {/* <div className={props.allVisible ? styles.visible : styles.unVisible}> */}
        <div className={styles.visible}>
            <p className={!props.completed ? styles.active :styles.completed}>
                {props.task}</p>
                <div>
            <button className={styles.toggle} onClick={toggleClick}></button>
            <button className={styles.delete} onClick={deleteClick}></button>
            </div>
        </div>
       
        {/* <div className={props.visibleActive ? styles.visible :styles.unVisible}>
        <p className={props.completed ? styles.unVisible :styles.active}>
            {props.task}</p>
            <div>
            <button className={styles.toggle} onClick={toggleClick}></button>
            <button className={styles.delete} onClick={deleteClick}></button>
            </div>
    </div>
       
        <div className={props.visibleCompleted ? styles.visible :styles.unVisible}>
        <p className={props.completed ? styles.completed : styles.unVisible}>
            {props.task}</p>
            <div>
            <button className={styles.toggle} onClick={toggleClick}></button>
            <button className={styles.delete} onClick={deleteClick}></button>
            </div>
    </div> */}


    </div>
    )
}

export default TodoList
