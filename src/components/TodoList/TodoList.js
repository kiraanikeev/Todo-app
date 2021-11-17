import React from 'react'
import styles from './TodoList.module.css'

function TodoList(props) {



    function defaultValue(){

        props.setTodoEditing(props.id)
        props.setEditName(props.task)
    }
 
    return (<div className={styles.list}>
        
        <div className={styles.visible}>
      <div>
           {props.id === props.todoEditing ? (
               <input type='text' defaultValue={props.task} onChange={(e)=>{props.setEditName(e.target.value)}}/>
           ) : ( <p className={!props.completed ? styles.active :styles.completed}>
           {props.task}</p>)}
           </div>
                <div>
              <button className={styles.toggle} onClick={()=>props.handleToggle(props.id)}></button>
            <button className={styles.delete} onClick={()=>props.handleDelete(props.id)}></button>
            {props.id === props.todoEditing ? (
               <button  onClick={()=> props.handleEdit(props.id)}>SUBMIT EDIT</button>
           ) : (  <button  onClick={defaultValue}>EDIT</button>)}
           
            </div>


        </div>
    </div>
    )
}

export default TodoList
