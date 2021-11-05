const EditAnnouncementForm = () => {
  return (
    <div>
      <form>
        <label>
          Title:
          <input type='text' placeholder='Add a title...' required />
        </label>
        <label>
          Description
          <textarea placeholder='Write an Announcement' required />
        </label>
        <select>
          <option>test</option>
        </select>
        <input type='submit' value='Create Announcement' />
        <button>Cancel</button>
      </form>
    </div>
  );
};

export default EditAnnouncementForm;
