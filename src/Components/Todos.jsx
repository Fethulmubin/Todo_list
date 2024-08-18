import React from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import styles from './Styles.module.css'

export default function 
Todos({task, complete, deleted, editTodo}) {
  return (
    <>
    <div className={styles.todo}>
        <p onClick={()=>complete(task._id)}  className={task.isComplete ? `${styles.completed }`: `${styles.not_completed}`} >{task.task}</p>
        <div className={styles.operation}>
            <ModeEditIcon className={styles.edit} onClick={()=> editTodo(task._id)}/>
            <DeleteForeverIcon className={styles.delete} onClick={()=>deleted(task._id)}/>
        </div>
    </div>
    {/* <hr /> */}
    </>
  )
}
