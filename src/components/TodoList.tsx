import React from 'react'
import "./styles.css"
import SingleTodo from './SingleTodo';
interface Todo{
    id:number;
    todo:string;
    isDone:boolean;
  } 
interface props {
    todos: Array<Todo>;
    setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
  } 
const  TodoList: React.FC <props> = ({todos,setTodos}) => {
  return (
    <div className="todos">
      {
        todos.map((todo)=>(
             
            <SingleTodo  todo={todo} 
                          key={todo.id}
                          todos={todos}
                          setTodos={setTodos}/>
           
        
        )
        )
      }
    </div>
  )
}

export default TodoList;
