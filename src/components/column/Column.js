import Announcement from "../announcement/Announcement";
import "./Column.css";
const Column = ({ deleteAnnouncement, announcements, selectedCategory,handleEditClick }) => {
  return (
    <div className='column'>
      <span className='columnTitle'> {selectedCategory?.title}</span>
      {announcements.map((announcement) => (
        <Announcement
          key={announcement.id}
          announcement={announcement}
          deleteAnnouncement={deleteAnnouncement}
          handleEditClick={handleEditClick}
         
        />
      ))}
    </div>
  );
};

export default Column;
