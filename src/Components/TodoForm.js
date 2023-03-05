import {useState} from "react";

function TodoForm(props){
    
    const [input , setInput] = useState('');
    
    const handleChnage = (e)=>{
        setInput(e.target.value);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
    }

    return(
    <form className = "todo-form" onSubmit={handleSubmit}>
    <input
     className = "todo-input"
     type = "text"
     placeholder = "Add To Do"
     value={input}
     onChange = {handleChnage}
    />
    <button className="todo-button">Add to do</button>
    </form>
    );
}
export default TodoForm;