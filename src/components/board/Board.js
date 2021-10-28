import Column from "../column/Column";
import "./Board.css";
const Board = ({ categories, announcements, selectedCategory }) => {
  return (
    <div className='boardWrapper'>
      <Column
        categories={categories}
        announcements={announcements}
        selectedCategory={selectedCategory}
      />
    </div>
  );
};

export default Board;
