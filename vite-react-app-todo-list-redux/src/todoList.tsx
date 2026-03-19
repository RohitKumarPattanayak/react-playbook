import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from './store'
import { addItem, deleteItem } from './state/todoSlice'
import { useRef } from 'react'

const TodoList = ()=>{
    const todoList = useSelector((state: RootState)=>state.todo.todolist)    
    const itemInputRef = useRef<HTMLInputElement>(null) 
    const dispatch = useDispatch<AppDispatch>()

    const handleAdd = ()=>{
            const input = itemInputRef.current;
            if (!input) return;

            const itemValue = input.value.trim();
            if (!itemValue) return;

            dispatch(addItem({
                timpstamp: Date.now(), 
                desc: itemValue
            }));

            input.value = "";
            }
    return <div>
        <h5>Your todo list</h5>
        <input ref={itemInputRef} id='item' type='text' onKeyDown={(e)=>{
                if(e.key == 'Enter'){
                    handleAdd()
                }
            }}></input>
        <div>
            <span><button onClick={handleAdd}>Add</button></span>
        </div>
        <div className='todoList'>
         {todoList.map((item)=>{
            return <div key={item.timpstamp}>
                {item.timpstamp} : {item.desc}
                <span><button key={item.timpstamp} onClick={()=>{
                    dispatch(deleteItem(item.timpstamp))
                }}>Delete</button></span>
            </div>
         } )}
        </div>
    </div>
}


export default TodoList;