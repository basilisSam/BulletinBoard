import "./NavBar.css";

const NavBar = ({ fetchAllAnnouncements,isFormVisible, categories, fetchingCategory }) => {
  return (
    <div className="navBarWrapper">
    <button onClick={() => fetchAllAnnouncements()}>All categories</button>
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
