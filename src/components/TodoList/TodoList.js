import React from 'react'
import styles from './TodoList.module.css'
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import { FaSave } from 'react-icons/fa';

function TodoList(props) {



    function defaultValue(){

        props.setTodoEditing(props.id)
        props.setEditName(props.task)
    }
 
    return (<div className={styles.list}>
        
        <div className={styles.element}>
              <input
              className={styles.toggle}
              type="checkbox"
              checked={props.completed}
              onChange={()=>props.handleToggle(props.id)}
                />
              {props.id === props.todoEditing ? (
               <input type='text' defaultValue={props.task} onChange={(e)=>{props.setEditName(e.target.value)}}/>
              ) : ( <p className={!props.completed ? styles.active :styles.completed}>
              {props.task}</p>)}
                <div className={styles.icons}>
          
                <RiCloseCircleLine className={styles.delete} onClick={()=>props.handleDelete(props.id)}/>
            {props.id === props.todoEditing ? (
               <FaSave  onClick={()=> props.handleEdit(props.id)}/>
           ) : (  <TiEdit  className={styles.edit} onClick={defaultValue}/>)}
           
            </div>


        </div>
    </div>
    )
}

export default TodoList
