import React from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import styles from './Styles.module.css'

export default function 
Todos({task, complete, deleted}) {
  return (
    <>
    <div className={styles.todo}>
        <p onClick={()=>complete(task.id)}  className={task.completed ? `${styles.completed }`: `${styles.not_completed}`} >{task.task}</p>
        <div className={styles.operation}>
            <ModeEditIcon className={styles.edit} />
            <DeleteForeverIcon className={styles.delete} onClick={()=>deleted(task.id)}/>
        </div>
    </div>
    {/* <hr /> */}
    </>
  )
}
