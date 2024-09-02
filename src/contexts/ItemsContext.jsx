import { createContext, useState } from "react";

export const ItemsContext = createContext();

export const Provider = ({ children }) => {
    const [Items, setItems] = useState([]);


    
    const reset = () => setItems([]);

    const addItem = (item) => {
        const itemExists = Items.some(i => i.id === item.id);
        if (itemExists) {
            setItems(prev => prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i));
        } else {
            setItems(prev => [...prev, item]);
        };
       

        
        if (!Items.some(i => i.id === item.id)) {
            setItems((prev) => [...prev, item]);
        }
    };

    const removeItem = (id) => {
        const filteredItems = Items.filter(i => i.id !== id);
        setItems(filteredItems);
    };

    
    console.log(Items);

    return (
        <ItemsContext.Provider value={{ addItem, Items, removeItem, reset }}>
            {children}
        </ItemsContext.Provider>
    );
};
