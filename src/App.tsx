import { useState } from 'react';

import Logo from '@/components/Logo';
import AddForm from '@/components/AddForm';
import PackingList from '@/components/PackingList';
import Stats from '@/components/Stats';

import { ListItemType } from '@/types';

export default function App() {
  const [items, setItems] = useState<ListItemType[]>([]);

  function handleAddItem(newItem: ListItemType) {
    setItems([...items, newItem]);
  }

  function handleToggleItem(itemToToggleId: number) {
    const updatedItems = items.map((item) => {
      return item.id !== itemToToggleId
        ? item
        : { ...item, packed: !item.packed };
    });

    setItems(updatedItems);
  }

  return (
    <div className="app">
      <Logo />
      <AddForm onAddItem={handleAddItem} />
      <PackingList items={items} onToggleItem={handleToggleItem} />
      <Stats items={items} />
    </div>
  );
}
