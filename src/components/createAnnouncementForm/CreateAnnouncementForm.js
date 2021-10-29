const CreateAnnouncementForm = ({ isFormVisible }) => {
  return (
    <div>
      <form>
        <label>
          Title:
          <input type='text' name='name' placeholder='Add a Title' />
        </label>
        <label>
          Description
          <textarea placeholder='Write an Announcement' />
        </label>
        <select>
          <option value='grapefruit'>Grapefruit</option>
          <option value='lime'>Lime</option>
          <option selected value='coconut'>
            Coconut
          </option>
          <option value='mango'>Mango</option>
        </select>
        <input type='submit' value='Create Announcement' />
        <button onClick={() => isFormVisible(false)}>Cancel</button>
      </form>
    </div>
  );
};

export default CreateAnnouncementForm;