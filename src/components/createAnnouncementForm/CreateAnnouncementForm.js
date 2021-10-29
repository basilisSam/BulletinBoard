const CreateAnnouncementForm = ({
  createNewAnnouncement,
  isFormVisible,
  captureTitle,
  captureText,
}) => {
  return (
    <div>
      <form onSubmit={(e) => createNewAnnouncement(e)}>
        <label>
          Title:
          <input
            onChange={(e) => captureTitle(e)}
            type="text"
            placeholder="Add a title..."
          />
        </label>
        <label>
          Description
          <textarea
            onChange={(e) => captureText(e)}
            placeholder="Write an Announcement"
          />
        </label>
        <select>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
        <input type="submit" value="Create Announcement" />
        <button onClick={() => isFormVisible(false)}>Cancel</button>
      </form>
    </div>
  );
};

export default CreateAnnouncementForm;
