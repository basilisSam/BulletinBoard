import "./EditAnnouncementForm.css"
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
    <form onSubmit={(e) => handleEditFormSubmit(e)}>
      <div className='editAnnouncementTitleWrapper'>
        <div className='editAnnouncementTitle'>
          <label className='editAnnouncementTitleLabel' htmlFor='grid-title'>
            Title:
          </label>
          <input
            className='editAnnouncementTitleInput'
            id='grid-title'
            required
            type='text'
            placeholder='Update a title...'
            onChange={(e) => handleEditTitleChange(e)}
            value={announcementToBeEdited.title}
          />
          <p className='editAnnouncementTitleParagraph'>
            Please fill out this field.
          </p>
        </div>
      </div>
      <div className='editAnnouncementTextWrapper'>
        <div className='editAnnouncementText'>
          <label
            className='editAnnouncementTextLabel'
            htmlFor='grid-description'
          >
            Description:
          </label>
          <textarea
            className='editAnnouncementTextInput'
            id='grid-description'
            required
            type='text'
            placeholder='Edit an Announcement'
            onChange={(e) => handleEditTextChange(e)}
            value={announcementToBeEdited.text}
          />
          <p className='editAnnouncementTextParagraph'>
            Please fill out this field.
          </p>
        </div>
      </div>
      <div className='editAnnouncementStateWrapper'>
        <div className='editAnnouncementState'>
          <label className='editAnnouncementStateLabel' htmlFor='grid-state'>
            State
          </label>
          <div className='editAnnouncementStateInputWrapper'>
            <select
              onChange={(e) => handleEditCategory(e)}
              className='editAnnouncementStateSelect'
              id='grid-state'
            >
              {" "}
              {categories.map((category) => (
                <option
                  defaultValue={announcementToBeEdited.category}
                  key={category.id}
                  value={category.id}
                >
                  {category.title}
                </option>
              ))}
            </select>
            <div className='editAnnouncementStateSvgWrapper'>
              <svg
                className='editAnnouncementStateSvg'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
              >
                <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className=' editAnnouncementButtonWrapper'>
        <input
          type='submit'
          value='Update Announcement'
          className='editAnnouncementCreateButton'
          onClick={(e) => handleEditFormSubmit(e)}
        />
        <button
          className='editAnnouncementCancelButton'
          onClick={() => setIsEditing(false)}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditAnnouncementForm;
