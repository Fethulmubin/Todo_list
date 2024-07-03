import React, {useState} from 'react'
import Todo_form from './Todo_form'
import Todos from './Todos'
import Edit_form from './Edit_form'
import styles from './Styles.module.css'


export default function Wrapper 
() {
  const [todos , setTodos] = useState([])
  const addTodo = todo =>{
 setTodos([...todos, {id: new Date().getTime(), task :todo, completed :false, isEdit : false}])
//  console.log(todos)
  }
  const complete = id =>{
    setTodos(todos.map(todo=> todo.id ===id?{...todo, completed: !todo.completed}: todo))
    
  }
  const deleted = id =>{
    setTodos(todos.filter(todo=> todo.id !== id))
    
  }
  const editTodo = id=>{
    setTodos(todos.map(todo => todo.id ===id? {...todo, isEdit: !todo.isEdit}:todo))
  }
  const editTask = (task, id)=>{
    setTodos(todos.map(todo=> todo.id ===id ?{todo, task, isEdit: !todo.isEdit} :todo))
  }
  // console.log(todos.completed)
  return (
    <div className={styles.wrapper}>
      <h1>My today tasks</h1>
        <Todo_form addTodo={addTodo} />
        {todos.map((todo, index)=>(
          todo.isEdit ? 
          (<Edit_form editTodo={editTask} task={todo}/>):
          <Todos task={todo} key={index} complete={complete} deleted={deleted} editTodo={editTodo}/>
        ))}
        
    </div>
  )
}
