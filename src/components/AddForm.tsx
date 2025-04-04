export default function AddForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3 className="add-form__title">What do you need for your 😍 trip?</h3>
      <select
        className="add-form__form-control add-form__count-select"
        name="count"
        id="count"
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
