import useTodoStore from "./store"

const TodoList = ()=> {
const todoListItems = useTodoStore((state)=>state.list)
return <div>
        <h5>Todo list</h5>
        <input type="text"></input>
        <button>add</button>
        {todoListItems.map((item)=>{
            return <div>
                {item.timestamp} : {item.desc}
                <button>detele</button>
                </div>
        })}
    </div>
}


export default TodoList;