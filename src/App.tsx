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

  return (
    <div className="app">
      <Logo />
      <AddForm onAddItem={handleAddItem} />
      <PackingList items={items} />
      <Stats items={items} />
    </div>
  );
}
