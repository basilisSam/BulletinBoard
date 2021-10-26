import Announcement from "../announcement/Announcement";
import "./Category.css";
const Category = ({ title }) => {
  return (
    <div className='column'>
      <span className='columnTitle'> {title}</span>
      <Announcement />

      <div className='createCardBtn'>
        <button>click here</button>
      </div>
    </div>
  );
};

export default Category;
