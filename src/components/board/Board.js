import Category from "../category/Category";
import "./Board.css";
const Board = ({ categories }) => {
  return (
    <div className='boardWrapper'>
      {categories.map((categorie) => (
        <Category key={categorie.id} title={categorie.title} />
      ))}
    </div>
  );
};

export default Board;
