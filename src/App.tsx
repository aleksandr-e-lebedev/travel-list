import Logo from '@/components/Logo';
import AddForm from '@/components/AddForm';
import PackingList from '@/components/PackingList';
import Stats from '@/components/Stats';

import { ListItemType } from '@/types';

const items: ListItemType[] = [
  {
    id: 1,
    description: 'Hat',
    quantity: 2,
    packed: false,
  },
  {
    id: 2,
    description: 'Boots',
    quantity: 3,
    packed: true,
  },
  {
    id: 3,
    description: 'Backpack',
    quantity: 1,
    packed: true,
  },
  {
    id: 4,
    description: 'Charger',
    quantity: 2,
    packed: false,
  },
  {
    id: 5,
    description: 'Umbrella',
    quantity: 1,
    packed: false,
  },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <AddForm />
      <PackingList items={items} />
      <Stats items={items} />
    </div>
  );
}
