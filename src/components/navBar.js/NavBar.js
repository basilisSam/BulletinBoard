import "./NavBar.css";

const NavBar = ({ isFormVisible, categories, fetchingCategory }) => {
  return (
    <div className='navBarWrapper'>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => {
            fetchingCategory(category);
            isFormVisible(false);
          }}
        >
          {category.title}
        </button>
      ))}
    </div>
  );
};

export default NavBar;
