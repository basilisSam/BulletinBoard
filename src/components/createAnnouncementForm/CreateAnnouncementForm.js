const CreateAnnouncementForm = ({
  createNewAnnouncement,
  isFormVisible,
  captureTitle,
  captureText,
  captureCategory,
  categories,
}) => {
  return (
    <div>
      <form onSubmit={(e) => createNewAnnouncement(e)}>
        <label>
          Title:
          <input
            onChange={(e) => captureTitle(e)}
            type='text'
            placeholder='Add a title...'
            required
          />
        </label>
        <label>
          Description
          <textarea
            onChange={(e) => captureText(e)}
            placeholder='Write an Announcement'
            required
          />
        </label>
        <select onChange={(e) => captureCategory(e)}>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.title}
            </option>
          ))}
        </select>

        <input type='submit' value='Create Announcement' />
        <button onClick={() => isFormVisible(false)}>Cancel</button>
      </form>
    </div>
  );
};

export default CreateAnnouncementForm;
