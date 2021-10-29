import Announcement from "../announcement/Announcement";
import "./Column.css";
const Column = ({ announcements, selectedCategory }) => {
  return (
    <div className='column'>
      <span className='columnTitle'> {selectedCategory?.title}</span>
      {announcements.map((announcement) => (
        <Announcement
          key={announcement.id}
          title={announcement.title}
          text={announcement.text}
        />
      ))}
    </div>
  );
};

export default Column;
