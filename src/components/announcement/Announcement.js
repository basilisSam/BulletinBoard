import "./Announcement.css";

const Announcement = ({ deleteAnnouncement, announcement }) => {
  return (
    <div className='announcementWrapper'>
      <span className='title'>{announcement.title}</span>
      <div>{announcement.text}</div>
      <div className='createDeleteBtn'>
        <button onClick={() => deleteAnnouncement(announcement.id)}>Delete</button>
      </div>
    </div>
  );
};

export default Announcement;
