import React from 'react';
import { AiFillDelete } from "react-icons/ai";
// import { AiFillEdit} from "react-icons/ai";
import { MdDone } from "react-icons/md";
interface Todo {
    id: number;
    todo: string;
    isDone: boolean;
}
type Props = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
    const handleDone = (id: number) => {
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
          )
        );
        
    };
    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };
    return (
        
            <form className="todos__single">
                {   
                    
                    todo.isDone ? (
                        <s className="todos_single_text">{todo.todo}</s>
                    ) : (
                        <span className="todos_single_text">{todo.todo}</span>
                    ) 
                   
                }
                {/* <span className="todos_single_text">{todo.todo}</span> */}
                <div>
                    <span className="icon" onClick={()=> handleDelete(todo.id)} > <AiFillDelete /> </span>

                    

                    <span className="icon" onClick={()=> handleDone(todo.id)} > <MdDone /> </span>
                    {/* <span className="icon"> <AiFillEdit /> </span> */}
                </div>
            </form>
        
    )
}

export default SingleTodo
