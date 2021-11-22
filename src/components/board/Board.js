import { useState } from "react";
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
}) => {
  const [isEditing, setIsEditing] = useState(true);

  return (
    <div className='boardWrapper'>
      {!isAdding ? (
        <>
          <div className='createCardBtn'>
            <button onClick={() => isFormVisible(true)}>Add Announcement</button>
          </div>
          <Column
            deleteAnnouncement={deleteAnnouncement}
            announcements={announcements}
            selectedCategory={selectedCategory}
          />

          {isEditing && <EditAnnouncementForm />}
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
