import { createSlice, type PayloadAction } from '@reduxjs/toolkit'


interface todoItem {
    timpstamp: number,
    desc: string
}

export interface todoState {
  todolist: todoItem[]
}

const initialState: todoState = {
  todolist: [],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addItem : (state, action : PayloadAction<todoItem>) => {
        state.todolist = [...state.todolist, action.payload]
    },
    deleteItem : (state, action : PayloadAction<number>) => { 
        state.todolist = state.todolist.filter((item)=> item.timpstamp != action.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const { addItem, deleteItem } = todoSlice.actions

export default todoSlice.reducer