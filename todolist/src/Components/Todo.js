import React from 'react'
import TodoItem from './TodoItem'

function Todo(props) {
const mystyle={
  minHeight:'70vh',
  margin:'40px auto',
}
  return (
    <div className='container' style={mystyle}>
   <h1 className='my-3'>Todo List</h1>
   {props.todos.length===0?<p>No todos To show</p>:
    props.todos.map((todo)=>{
    
  return  <TodoItem todos={todo} key={todo.sno} onDelete={props.onDelete}/>

     
   })
}
    </div>
  )
}

export default Todo
