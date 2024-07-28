import './App.css';
import Navbar from './Components/Navbar';
import Todo from './Components/Todo';
import { useEffect, useState } from 'react';
import Addtodo from './Components/Addtodo';
import Footer from './Components/Footer';

function App() {
  let inittodo;
  if(localStorage.getItem('todos')===null){
inittodo=[]
  }else{
    inittodo=JSON.parse(localStorage.getItem('todos'))
  }
  const addtodo=(title,desc)=>{
    console.log('i am added',title,desc);
    let sno;
    if(todos.length===0){
      sno=0
    }else{
      sno= todos[todos.length-1].sno + 1
    }
  const mytodo={
    sno:sno,
    title:title,
    desc:desc,
  }
settodos([...todos,mytodo]);
console.log(mytodo);
  }
  const onDelete=(todo)=>{
    settodos(todos.filter((e)=>{
return e!==todo
    }
  ))
  }
  
  const[todos,settodos]=useState(inittodo);
  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos))
  },[todos])
  return (
    <>
    <Navbar title={"My Todo List"}/>
    <Addtodo addtodo={addtodo}/>
    <Todo todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
