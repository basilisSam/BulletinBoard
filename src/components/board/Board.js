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
  handleEditFormSubmit,
  handleEditCategory,
}) => {
  return (
    <div className='boardWrapper'>
      {isAdding || isEditing ? (
        <>
          {isAdding && (
            <CreateAnnouncementForm
              isFormVisible={isFormVisible}
              createNewAnnouncement={createNewAnnouncement}
              captureTitle={captureTitle}
              captureText={captureText}
              captureCategory={captureCategory}
              categories={categories}
            />
          )}
          {isEditing && (
            <EditAnnouncementForm
              setIsEditing={setIsEditing}
              handleEditTitleChange={handleEditTitleChange}
              handleEditTextChange={handleEditTextChange}
              announcementToBeEdited={announcementToBeEdited}
              handleEditFormSubmit={handleEditFormSubmit}
              handleEditCategory={handleEditCategory}
              categories={categories}
            />
          )}
        </>
      ) : (
        <>
          <Column
            deleteAnnouncement={deleteAnnouncement}
            announcements={announcements}
            selectedCategory={selectedCategory}
            handleEditClick={handleEditClick}
          />

          <div className='createCardBtn'>
            <button onClick={() => isFormVisible(true)}>
              Add Announcement
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Board;
