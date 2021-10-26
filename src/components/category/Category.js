import Announcement from "../announcement/Announcement";
import "./Category.css";
const Category = () => {
  return (
    <div className='column'>
      <span className='columnTitle'> Random text</span>
      <Announcement />

      <div className='createCardBtn'>
        <button>click here</button>
      </div>
    </div>
  );
};

export default Category;
