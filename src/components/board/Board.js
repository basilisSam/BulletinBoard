import Column from "../column/Column";
import CreateAnnouncementForm from "../createAnnouncementForm/CreateAnnouncementForm";
import EditAnnouncementForm from "../editAnnouncementForm/EditAnnouncementForm";
import "./Board.css";

const Board = ({
  isFormVisible,
  isAdding,
  announcements,
  selectedCategory,
  createNewAnnouncement,
  captureTitle,
  captureText,
  captureCategory,
  categories,
  deleteAnnouncement,
  isEditing,
  setIsEditing,
  handleEditClick,
  handleEditTitleChange,
  handleEditTextChange,
  announcementToBeEdited,
  handleEditFormSubmit
}) => {
  return (
    <div className='boardWrapper'>
      {!isAdding ? (
        <>
          <Column
            deleteAnnouncement={deleteAnnouncement}
            handleEditClick={handleEditClick}
            announcements={announcements}
            selectedCategory={selectedCategory}
          />

          <div className='createCardBtn'>
            <button onClick={() => isFormVisible(true)}>
              Add Announcement
            </button>
          </div>
          {isEditing && (
            <EditAnnouncementForm
              setIsEditing={setIsEditing}
              handleEditTitleChange={handleEditTitleChange}
              handleEditTextChange={handleEditTextChange}
              announcementToBeEdited={announcementToBeEdited}
              handleEditFormSubmit={handleEditFormSubmit}
            />
          )}
        </>
      ) : (
        <>
          <CreateAnnouncementForm
            isFormVisible={isFormVisible}
            createNewAnnouncement={createNewAnnouncement}
            captureTitle={captureTitle}
            captureText={captureText}
            captureCategory={captureCategory}
            categories={categories}
          />
        </>
      )}
    </div>
  );
};

export default Board;
