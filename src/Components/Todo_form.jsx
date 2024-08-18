import React, {useState} from 'react'
import styles from './Styles.module.css'


// import AddIcon from '@mui/icons-material/Add';

export default function Todo_form({addTodo}) {
  const [Value, setValue] = useState('')
  const handleSubmit = e =>{
    e.preventDefault();
    if(Value !== ''){
    addTodo(Value)
    }
    setValue("")
  }
  return (
    <div>
           <form className={styles.form} onSubmit={handleSubmit}>
        <input className={styles.task} type='text'  placeholder='What do you do today?' onChange={e=> setValue(e.target.value)} value={Value}/>
        
        <button className={styles.add_btn} type='submit'>Add Task</button>
        
        </form>
    </div>
  )
}
