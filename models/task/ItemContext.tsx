import React, { createContext, useState, ReactNode } from "react";

interface ItemContextType {
  items: string[];
  addItem: (item: string) => void;
  removeItem: (index: number) => void;
}

const ItemContext = createContext<ItemContextType | undefined>(undefined);

export const ItemProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<string[]>(["Task 1", "Task 2"]);

  const addItem = (item: string) => {
    setItems([...items, item]);
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <ItemContext.Provider value={{ items, addItem, removeItem }}>
      {children}
    </ItemContext.Provider>
  );
};

export default ItemContext;
