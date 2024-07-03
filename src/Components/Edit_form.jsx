import React, {useState} from 'react'
import styles from './Styles.module.css'


// import AddIcon from '@mui/icons-material/Add';

export default function  Edit_form({editTodo, task}) {
  const [Value, setValue] = useState(task.task)
  const handleSubmit = e =>{
    e.preventDefault();
    editTodo(Value, task.id)
    setValue("")
  }
  return (
    <div>
           <form className={styles.form} onSubmit={handleSubmit}>
        <input className={styles.task} type='text'  placeholder='What is you updated task?' onChange={e=> setValue(e.target.value)} value={Value}/>
        
        <button className={styles.add_btn} type='submit'>Update Task</button>
        
      
        
        </form>
    </div>
  )
}
