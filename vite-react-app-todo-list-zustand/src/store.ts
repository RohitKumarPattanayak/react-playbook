import {create} from 'zustand';

type listitem = {
    timestamp : number,
    desc : string
}

type todoStoreType = {
    list : listitem[],
    addItem : (desc: string) => void,
    deleteItem : (timestamp : number) => void
}

const useTodoStore = create<todoStoreType>((set) => ({
    list: [],
    addItem : (desc)=> {
        set((state)=>({
            list: [...state.list, {
                timestamp : Date.now(),
                desc: desc
            }]
        }))
    },
    deleteItem : (timestamp : number) =>{
        set((state)=>({
            list : state.list.filter((item)=>item.timestamp!=timestamp)
        }))
    }
}));


export default useTodoStore;