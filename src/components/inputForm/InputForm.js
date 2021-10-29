const InputForm = () => {
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
        <input type='submit' value='Create Announcement' />
        <select>
          <option value='grapefruit'>Grapefruit</option>
          <option value='lime'>Lime</option>
          <option selected value='coconut'>
            Coconut
          </option>
          <option value='mango'>Mango</option>
        </select>
      </form>
    </div>
  );
};

export default InputForm;
