import "./NavBar.css";

const NavBar = ({ categories }) => {
  return (
    <div className='navBarWrapper'>
      {categories.map((category) => (
        <button>{category.title}</button>
      ))}
    </div>
  );
};

export default NavBar;
