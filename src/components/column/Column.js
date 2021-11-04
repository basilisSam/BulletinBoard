import Announcement from "../announcement/Announcement";
import "./Column.css";
const Column = ({ deleteAnnouncement, announcements, selectedCategory }) => {
  return (
    <div className='column'>
      <span className='columnTitle'> {selectedCategory?.title}</span>
      {announcements.map((announcement) => (
        <Announcement
          key={announcement.id}
          announcement={announcement}
          deleteAnnouncement={deleteAnnouncement}
        />
      ))}
    </div>
  );
};

export default Column;
