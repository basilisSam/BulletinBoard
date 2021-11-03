import "./Announcement.css";

const Announcement = ({ deleteAnnouncement, title, text }) => {
  return (
    <div className='announcementWrapper'>
      <span className='title'>{title}</span>
      <div>{text}</div>
      <div className='createDeleteBtn'>
        <button onClick={() => deleteAnnouncement()}>delete</button>
      </div>
    </div>
  );
};

export default Announcement;
