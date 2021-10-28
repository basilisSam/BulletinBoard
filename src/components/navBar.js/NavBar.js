import "./NavBar.css";

const NavBar = ({ title }) => {
  return (
    <div className='navBarWrapper'>
      <button>{title}</button>
    </div>
  );
};

export default NavBar;
