import React from 'react';
import './styles.css';

interface Props { 
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}
const InputField = ({ todo, setTodo, handleAdd }: Props) => {
    return (
        <form className='input' onSubmit={(e) =>handleAdd(e)}>
            <input type="input" value={todo} onChange={
                (e) => setTodo(e.target.value)
            }
                placeholder='Enter a task' className='input_box' data-testid="2" />
            <button className='input_submit' type="submit" data-testid="3">GO</button>
        </form>
    )
}

export default InputField;
