import "./Announcement.css";

const Announcement = ({ title, text }) => {
  return (
    <div className='announcementWrapper'>
      <span className='title'>{title}</span>
      <div>{text}</div>
    </div>
  );
};

export default Announcement;
