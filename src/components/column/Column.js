import Announcement from "../announcement/Announcement";
import "./Column.css";
const Column = ({ deleteAnnouncement,announcements, selectedCategory }) => {
  return (
    <div className="column">
      <span className="columnTitle"> {selectedCategory?.title}</span>
      {announcements.map((announcement) => (
        <Announcement
          key={announcement.id}
          title={announcement.title}
          text={announcement.text}
          deleteAnnouncement={deleteAnnouncement}
        />
      ))}
    </div>
  );
};

export default Column;
