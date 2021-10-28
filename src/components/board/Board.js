import Column from "../column/Column";
import "./Board.css";
const Board = ({ categories, announcements }) => {
  return (
    <div className='boardWrapper'>
      <Column categories={categories} announcements={announcements} />
    </div>
  );
};

export default Board;
