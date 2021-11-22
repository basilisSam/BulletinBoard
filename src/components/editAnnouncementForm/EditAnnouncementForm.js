const EditAnnouncementForm = ({
  setIsEditing,
  handleEditTitleChange,
  handleEditTextChange,
  announcementToBeEdited,
  handleEditFormSubmit,
  handleEditCategory,
  categories,
}) => {
  return (
    <div>
      <form onSubmit={(e) => handleEditFormSubmit(e)}>
        <label>
          Title:
          <input
            onChange={(e) => handleEditTitleChange(e)}
            type='text'
            placeholder='Update a title...'
            value={announcementToBeEdited.title}
            required
          />
        </label>
        <label>
          Description
          <textarea
            onChange={(e) => handleEditTextChange(e)}
            placeholder='Write an Announcement'
            value={announcementToBeEdited.text}
            required
          />
        </label>
        <select onChange={(e) => handleEditCategory(e)}>
          {categories.map((category) => (
            <option defaultValue={announcementToBeEdited.category} key={category.id} value={category.id}>
              {category.title}
            </option>
          ))}
        </select>
        <input
          onClick={(e) => handleEditFormSubmit(e)}
          type='submit'
          value='Update Announcement'
        />
        <button onClick={() => setIsEditing(false)}>Cancel</button>
      </form>
    </div>
  );
};

export default EditAnnouncementForm;
