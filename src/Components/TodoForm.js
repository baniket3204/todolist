import {useState , useEffect , useRef} from "react";

function TodoForm(props){
  
    const [input , setInput] = useState(props.edit ? props.edit.value : '');

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
     {props.edit ? ( 
        <>
     <input
     className = "todo-input edit"
     type = "text"
     placeholder = "Update To Do"
     value={input}
     onChange = {handleChnage}
     ref = {inputRef}
    />
    <button className="todo-button edit">Update</button> 
     </>) : 
    (   <>
        <input
        className = "todo-input"
        type = "text"
        placeholder = "Add To Do"
        value={input}
        onChange = {handleChnage}
        ref = {inputRef}
       />
       <button className="todo-button">Add to do</button>
       </>)
       
       }
   
    </form>
    );
}
export default TodoForm;