import "./CreateAnnouncementForm.css";
const CreateAnnouncementForm = ({
  createNewAnnouncement,
  isFormVisible,
  captureTitle,
  captureText,
  captureCategory,
  categories,
}) => {
  return (
    <form
      className='createAnnouncementForm'
      onSubmit={(e) => createNewAnnouncement(e)}
    >
      <div className='createAnnouncementTitleWrapper'>
        <div className='createAnnouncementTitle'>
          <label className='createAnnouncementTitleLabel' htmlFor='grid-title'>
            Title:
          </label>
          <input
            className='createAnnouncementTitleInput'
            id='grid-title'
            required
            type='text'
            placeholder='Add a title...'
            onChange={(e) => captureTitle(e)}
          />
          <p className='createAnnouncementTitleParagraph'>
            Please fill out this field.
          </p>
        </div>
      </div>
      <div className='createAnnouncementTextWrapper'>
        <div className='createAnnouncementText'>
          <label
            className='createAnnouncementTextLabel'
            htmlFor='grid-description'
          >
            Description:
          </label>
          <textarea
            className='createAnnouncementTextInput'
            id='grid-description'
            required
            type='text'
            placeholder='Add a description...'
            onChange={(e) => captureText(e)}
          />
          <p className='createAnnouncementTextParagraph'>
            Please fill out this field.
          </p>
        </div>
      </div>
      <div className='createAnnouncementStateWrapper'>
        <div className='createAnnouncementState'>
          <label className='createAnnouncementStateLabel' htmlFor='grid-state'>
            State
          </label>
          <div className='createAnnouncementStateInputWrapper'>
            <select
              onChange={(e) => captureCategory(e)}
              className='createAnnouncementStateSelect'
              id='grid-state'
            >
              {" "}
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.title}
                </option>
              ))}
            </select>
            <div className='createAnnouncementStateSvgWrapper'>
              <svg
                className='createAnnouncementStateSvg'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
              >
                <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className=' createAnnouncementButtonWrapper'>
        <input
          type='submit'
          value='Create Announcement'
          className='createAnnouncementCreateButton'
        />
        <button
          className='createAnnouncementCancelButton'
          onClick={() => isFormVisible(false)}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default CreateAnnouncementForm;
