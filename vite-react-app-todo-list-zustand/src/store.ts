import {create} from 'zustand';

type listitem = {
    timestamp : number,
    desc : string
}

type todoStoreType = {
    list : listitem[],
    addItem : (desc: string) => void,
    deleteItem : (timestamp : number) => void
    addItemAsync: (desc: string) => Promise<void>
}

const useTodoStore = create<todoStoreType>((set,get) => ({
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
    },
    addItemAsync: async (desc) => {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        get().addItem(desc)
    },
}));


export default useTodoStore;