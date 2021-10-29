import Column from "../column/Column";
import "./Board.css";
const Board = ({ announcements, selectedCategory }) => {
  return (
    <div className='boardWrapper'>
      <Column
        announcements={announcements}
        selectedCategory={selectedCategory}
      />
      <div className='createCardBtn'>
        <button>Add Announcement</button>
      </div>
    </div>
  );
};

export default Board;
