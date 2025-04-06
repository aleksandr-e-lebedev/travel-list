import { useState } from 'react';

import ListItem from './ListItem';
import { ListItemType } from '@/types';

interface Props {
  items: ListItemType[];
  onToggleItem: (itemId: number) => void;
  onDeleteItem: (itemId: number) => void;
  onClearItems: () => void;
}

interface SortingType {
  input: string;
  description: string;
  status: string;
}

const Sorting: SortingType = {
  input: 'input',
  description: 'description',
  status: 'status',
};

type ValueType = SortingType[keyof SortingType];

export default function PackingList(props: Props) {
  const { items, onToggleItem, onDeleteItem, onClearItems } = props;
  const [sortBy, setSortBy] = useState<ValueType>('input');

  let sortedItems: ListItemType[] = [];

  function handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setSortBy(e.target.value);
  }

  function handleButtonClick() {
    onClearItems();
  }

  if (sortBy === Sorting.input) {
    sortedItems = items;
  }

  if (sortBy === Sorting.description) {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  if (sortBy === Sorting.status) {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="packing-list">
      <ul className="packing-list__list">
        {sortedItems.map((item) => (
          <ListItem
            key={item.id}
            item={item}
            onToggleItem={onToggleItem}
            onDeleteItem={onDeleteItem}
          />
        ))}
      </ul>

      <div className="packing-list__actions">
        <select
          className="packing-list__action"
          name="sorting"
          id="sorting"
          value={sortBy}
          onChange={handleSelectChange}
        >
          <option className="packing-list__option" value={Sorting.input}>
            Sort by input order
          </option>
          <option className="packing-list__option" value={Sorting.description}>
            Sort by description
          </option>
          <option className="packing-list__option" value={Sorting.status}>
            Sort by packed status
          </option>
        </select>

        <button
          className="packing-list__action"
          type="button"
          onClick={handleButtonClick}
        >
          Clear List
        </button>
      </div>
    </div>
  );
}
