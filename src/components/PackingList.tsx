import ListItem from './ListItem';
import { ListItemType } from '@/types';

interface Props {
  items: ListItemType[];
  onToggleItem: (itemId: number) => void;
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

export default function PackingList(props: Props) {
  const { items, onToggleItem } = props;

  return (
    <div className="packing-list">
      <ul className="packing-list__list">
        {items.map((item) => (
          <ListItem key={item.id} item={item} onToggleItem={onToggleItem} />
        ))}
      </ul>

      <div className="packing-list__actions">
        <select className="packing-list__action" name="sorting" id="sorting">
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

        <button className="packing-list__action" type="button">
          Clear List
        </button>
      </div>
    </div>
  );
}
