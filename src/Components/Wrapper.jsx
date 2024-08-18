import React, {useState, useEffect} from 'react'
import Todo_form from './Todo_form'
import Todos from './Todos'
import Edit_form from './Edit_form'
import styles from './Styles.module.css'
import axios from 'axios'


export default function Wrapper 
() {
  const [todos , setTodos] = useState([])
  // const [isEdit , setIsEdit] = useState(false)
  const URL = "http://localhost:5400/todo"
  
  const getTasks = async()=>{
    const {data} = await axios.get(URL);
    // console.log(data)
    setTodos(data)
  }
  useEffect(()=>{
  getTasks();
  },[todos])

  // functions
  const addTodo = async (todo) =>{
//  setTodos([...todos, {id: new Date().getTime(), task :todo, completed :false, isEdit : false}])
    // console.log(todo)
    const data = await axios.post(URL, {task :todo} )
    console.log(data)
//  console.log(todos)
  }
  const complete =  async (id) =>{
    
      const { data } = await axios.put(`${URL}/complete/${id}`);
      setTodos(todos.map(todo=> todo.id ===id?{...todo, isComplete: !todo.isComplete}: todo))
      // setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
      console.log(data)
  }
  const deleted = async id =>{
    const { data } = await axios.delete(`${URL}/${id}`);
    // setTodos(todos.filter(todo=> todo.id !== id))
    
  }
  const editTodo = async (id)=>{
    const { data } = await axios.put(`${URL}/edit/${id}`);
    setTodos(todos.map(todo => todo.id ===id? {...todo, isEdit: !todo.isEdit}:todo))
    // setIsEdit(todos.map(todo => todo.id ===id && !isEdit))
  }
  const editTask = async (task, id)=>{
    const { data } = await axios.put(`${URL}/update/${id}`, { task : task});
    const { data_2 } = await axios.put(`${URL}/edit/${id}`);
    setTodos(todos.map(todo=> todo.id ===id ?{...todo, task: todo.task, isEdit: !todo.isEdit} :todo))
  }
  // console.log(todos.completed)
  return (
    <div className={styles.wrapper}>
      <h1>My today tasks</h1>
        <Todo_form addTodo={addTodo} />
        {todos.map((todo, index)=>(
          todo.isEdit ? 
          (<Edit_form key={index} editTodo={editTask} task={todo}/>):
          <Todos task={todo} key={index} complete={complete} deleted={deleted} editTodo={editTodo}/>
        ))}
        
    </div>
  )
}
