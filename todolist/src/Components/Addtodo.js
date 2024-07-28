import React, { useState } from 'react'

function Addtodo(props) {
    const[title,settitle]=useState("");
    const[desc,setdesc]=useState("");
    const submit=(e)=>{
e.preventDefault();
if(!title || !desc){
    alert("Title or Description cannot be empty")
}else{
  props.addtodo(title,desc);
settitle("");
setdesc("");
}

    }
  return (
    <div className='container'>
      <h3 className='my-3'>Add Todo</h3>
      <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Todo List</label>
    <input type="text" className="form-control" onChange={(e)=>{settitle(e.target.value)}} value={title} id="title" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Todo Description</label>
    <input type="text" value={desc }onChange={(e)=>{setdesc(e.target.value)}} className="form-control" id="desc"/>
  </div>
  <button type="submit" className="btn btn-success btn-sm">Add Todo</button>
</form>
    </div>
  )
}

export default Addtodo
