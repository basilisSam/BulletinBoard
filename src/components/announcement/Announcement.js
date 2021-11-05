import "./Announcement.css";

const Announcement = ({ deleteAnnouncement, announcement }) => {
  return (
    <div className='announcementWrapper'>
      <span className='title'>{announcement.title}</span>
      <div>{announcement.text}</div>
      <div className='createDeleteBtn'>
        <button
          className='deleteButton'
          onClick={() => deleteAnnouncement(announcement.id)}
        >
          Delete
        </button>
        <button
          className='editButton'
          onClick={() => deleteAnnouncement(announcement.id)}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default Announcement;
