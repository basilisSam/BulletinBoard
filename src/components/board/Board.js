import Column from "../column/Column";
import "./Board.css";
const Board = ({ announcements, selectedCategory }) => {
  return (
    <div className='boardWrapper'>
      <Column
        announcements={announcements}
        selectedCategory={selectedCategory}
      />
    </div>
  );
};

export default Board;
