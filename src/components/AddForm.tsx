import { useState } from 'react';

import { ListItemType } from '@/types';

interface Props {
  onAddItem: (newItem: ListItemType) => void;
}

export default function AddForm({ onAddItem }: Props) {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!description) return;

    const newItem: ListItemType = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };

    onAddItem(newItem);

    setQuantity(1);
    setDescription('');
  }

  function handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setQuantity(Number(e.target.value));
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setDescription(e.target.value);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3 className="add-form__title">What do you need for your 😍 trip?</h3>
      <select
        className="add-form__form-control add-form__count-select"
        name="count"
        id="count"
        value={quantity}
        onChange={handleSelectChange}
      >
        {Array.from({ length: 20 }, (_item, index) => (
          <option
            className="add-form__count-option"
            key={index + 1}
            value={index + 1}
          >
            {index + 1}
          </option>
        ))}
      </select>
      <input
        className="add-form__form-control add-form__add-item-input"
        type="text"
        name="add-item"
        id="add-item"
        placeholder="Item..."
        value={description}
        onChange={handleInputChange}
      />
      <button
        className="add-form__form-control add-form__submit-button"
        type="submit"
      >
        Add
      </button>
    </form>
  );
}
