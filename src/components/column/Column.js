import Announcement from "../announcement/Announcement";
import "./Column.css";
const Column = ({ categories, announcements, selectedCategory }) => {
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

      <div className='createCardBtn'>
        <button>Add Announcement</button>
      </div>
    </div>
  );
};

export default Column;
