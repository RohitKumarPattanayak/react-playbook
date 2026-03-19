import { useState } from "react"

const TodoList = () => {
    const [todolist,setTodoList] = useState([])
    const [taskInput, updateTaskInput] = useState('')
    const handleAdd = () => {
        if (!taskInput){
            return
        }
        let desc = taskInput
        let i = Date.now()
        setTodoList([...todolist, {
            no: i,
            desc: desc
        }])
        updateTaskInput('')
    }
    const handleDelete = (no)=> {
        setTodoList(todolist.filter(item => item.no !== no))
    }

    return <div>
        <input 
        value={taskInput} 
        id = 'todo-input' 
        onChange={(e)=>updateTaskInput(e.target.value)} 
          onKeyDown={(e) => {
            if (e.key === "Enter") {
            handleAdd()
            }
        }}
        type="text"></input>
        <button onClick={handleAdd}> add </button>
        {todolist.map((data)=>
        <div key={data.no}> 
            <h1>{new Date(data.no).toDateString()} : {data.desc}</h1>
            <button onClick={(e)=>handleDelete(data.no)}>Delete</button>
            <hr />
        </div>)}
    </div>
}

export default TodoList;