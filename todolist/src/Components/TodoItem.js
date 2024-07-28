import React from 'react'
function TodoItem({todos,onDelete}) {

  return (
    <div className='container'>
      <h3>{todos.title} </h3>
      <p>{todos.desc}</p>
      <button className="btn btn-danger btn-sm" onClick={()=>{onDelete(todos)}}>
        Delete
      </button>
      <hr></hr>
    </div>
  )
}

export default TodoItem
