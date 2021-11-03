import Column from "../column/Column";
import CreateAnnouncementForm from "../createAnnouncementForm/CreateAnnouncementForm";
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
}) => {
  return (
    <div className='boardWrapper'>
      {!isAdding ? (
        <>
          <Column
            deleteAnnouncement={deleteAnnouncement}
            announcements={announcements}
            selectedCategory={selectedCategory}
          />

          <div className='createCardBtn'>
            <button onClick={() => isFormVisible(true)}>
              Add Announcement
            </button>
          </div>
        </>
      ) : (
        <CreateAnnouncementForm
          isFormVisible={isFormVisible}
          createNewAnnouncement={createNewAnnouncement}
          captureTitle={captureTitle}
          captureText={captureText}
          captureCategory={captureCategory}
          categories={categories}
        />
      )}
    </div>
  );
};

export default Board;
