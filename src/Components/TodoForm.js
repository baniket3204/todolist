import {useState , useEffect , useRef} from "react";

function TodoForm(props){
  
    const [input , setInput] = useState('');

    const inputRef = useRef(null);

    useEffect(()=>{
        inputRef.current.focus()
    })
    
    const handleChnage = (e)=>{
        setInput(e.target.value);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        
         props.onSubmit({
          id: Math.floor(Math.random() * 10000000),
          text: input
        })
    
        setInput('');
    }

    return(
    <form className = "todo-form" onSubmit={handleSubmit}>
    <input
     className = "todo-input"
     type = "text"
     placeholder = "Add To Do"
     value={input}
     onChange = {handleChnage}
     ref = {inputRef}
    />
    <button className="todo-button">Add to do</button>
    </form>
    );
}
export default TodoForm;