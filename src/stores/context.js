import { createContext, useState } from "react";

const cartContext = createContext({
    items: [],
    addItem: (item) => {},
    removeItem: (id) => {},
    total: 0,
})

const ContextProvider = props => {
    const [items, setItems] = useState([]);
    const [total, setTotal] = useState(0);

    const addItem = (item) => {
        setTotal(pre => Number(pre)+1)
        setItems(pre => {
            const itemIsPresent = pre.findIndex(el => el.id===item.id);
            if(itemIsPresent !== -1){
                pre[itemIsPresent] = {...pre[itemIsPresent], quantity: Number(pre[itemIsPresent].quantity)+1};
                return pre;
            }
            return pre.push(item);
        })
    }

    const removeItem = (id) => {
        setTotal(pre => Number(pre)-1)
        setItems(pre => pre.filter(item => item.id !== id));
    }

    const cart = {
        items, addItem, removeItem, total
    }

    return <cartContext.Provider value={cart}>
        {props.children}
    </cartContext.Provider>
}

export {ContextProvider, cartContext};