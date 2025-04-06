import { ListItemType } from '@/types';

interface Props {
  items: ListItemType[];
}

export default function Stats({ items }: Props) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 🚀</em>;
      </footer>
    );
  }

  const totalItems = items.length;
  const packedItems = items.reduce((acc, item) => {
    return item.packed ? acc + 1 : acc;
  }, 0);

  let percentOfPackedItems = 0;
  let allItemsArePacked = false;

  if (packedItems) {
    percentOfPackedItems = Math.round((packedItems / totalItems) * 100);
    allItemsArePacked = percentOfPackedItems === 100;
  }

  return (
    <footer className="stats">
      <em>
        {allItemsArePacked
          ? 'You got everything! Ready to go ✈️'
          : `💼 You have ${totalItems} items on your list, and you already packed ${packedItems} (${percentOfPackedItems}%)`}
      </em>
    </footer>
  );
}
