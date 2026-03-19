import { useState } from "react"
import useTodoStore from "./store"

const TodoList = ()=> {
const todoListItems = useTodoStore((state)=>state.list)

// const addItem = useTodoStore((state)=>state.addItem)
const addItemAsync = useTodoStore((state)=>state.addItemAsync)
const deleteItem = useTodoStore((state)=>state.deleteItem)

const [inputTxt, setInputTxt] = useState("")

const handleAdd = async()=> {
    // addItem(inputTxt)
    await addItemAsync(inputTxt)
    setInputTxt("")
}

return <div>
        <h5>Todo list</h5>
        <input 
        value={inputTxt} 
        type="text" 
        onChange={(e)=>setInputTxt(e.target.value)}
        onKeyDown={(button)=>{ 
            if(button.key=="Enter") {
                handleAdd()
            }
        }}></input>
        <button onClick={handleAdd}
        >add</button>
        {todoListItems.map((item)=>{
            return <div key={item.timestamp}>
                {item.timestamp} : {item.desc}
                <button key={item.timestamp}
                onClick={()=>deleteItem(item.timestamp)}
                >detele</button>
                </div>
        })}
    </div>
}


export default TodoList;