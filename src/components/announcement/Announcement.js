import "./Announcement.css";

const Announcement = ({ title, text }) => {
  return (
    <div className='ann_boiler'>
      <span className='title'>{title}</span>
      <div>{text}</div>
    </div>
  );
};

export default Announcement;
