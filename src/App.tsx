
import './App.css';

import React, { useState } from 'react'
import InputField from './components/InputField';
import TodoList from './components/TodoList';

interface Todo{
  id:number;
  todo:string;
  isDone:boolean;
} 
const App = ()  => {
  const [todo ,setTodo] = useState<string>("");
  const [todos ,setTodos] = useState<Todo[]>([]);

  const handleAdd = (e:React.FormEvent) =>{
      e.preventDefault();
      if(todo){
        setTodos([...todos,{id:Date.now(),todo,isDone:false}])
        setTodo("");
      }
  };

  console.log(todos);
  return (
    <div className='App'>
      <span className='heading'>My-Task</span>
      <InputField todo={todo} setTodo = {setTodo} handleAdd={handleAdd} />

      {/* {todos.map(t=><li>{t.todo}</li>)}  */}
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App

