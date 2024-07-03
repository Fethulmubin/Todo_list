import React, {useState} from 'react'
import Todo_form from './Todo_form'
import Todos from './Todos'


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
  // console.log(todos.completed)
  return (
    <>
        <Todo_form addTodo={addTodo} />
        {todos.map((todo, index)=>(
          <Todos task={todo} key={index} complete={complete} deleted={deleted}/>
        ))}
        
    </>
  )
}
