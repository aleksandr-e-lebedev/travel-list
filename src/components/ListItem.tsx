import { ListItemType } from '@/types';

interface Props {
  item: ListItemType;
  onToggleItem: (itemId: number) => void;
}

export default function ListItem(props: Props) {
  const { item, onToggleItem } = props;
  const { id, description, quantity, packed } = item;

  function handleCheckboxChange() {
    onToggleItem(item.id);
  }

  return (
    <li className="packing-list__list-item">
      <input
        className="packing-list__checkbox"
        type="checkbox"
        name="travel-item"
        id={`#${String(id)}-${description}`}
        checked={packed}
        onChange={handleCheckboxChange}
      />
      <span
        className="packing-list__item-description"
        style={packed ? { textDecoration: 'line-through' } : {}}
      >
        {quantity} {description}
      </span>
      <button className="packing-list__delete-button" type="button">
        ❌
      </button>
    </li>
  );
}
