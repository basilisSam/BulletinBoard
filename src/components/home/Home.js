import { useEffect, useState } from "react";
import Board from "../board/Board";
import NavBar from "../navBar.js/NavBar";
import "./Home.css";
const Home = () => {
  const [categories, setCategories] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({});
  const [isAdding, setIsAdding] = useState(false);
  const [newAnnouncement, setNewAnnouncement] = useState({});

  const URL_CATEGORIES = "http://localhost:8000/Categories";
  const URL_ANNOUNCEMENTS = "http://localhost:8000/Announcements";

  useEffect(() => {
    fetch(URL_CATEGORIES)
      .then((categories) => {
        if (categories.ok) {
          return categories.json();
        }

        throw categories;
      })
      .then((categories) => {
        setCategories(categories);
      })
      .catch((e) => {
        console.log("fetching categories failed :( ");
        console.log(e);
      });

    fetch(URL_ANNOUNCEMENTS)
      .then((announcements) => {
        if (announcements.ok) {
          return announcements.json();
        }

        throw announcements;
      })
      .then((announcements) => {
        setAnnouncements(announcements);
      })
      .catch((e) => {
        console.log("fetching announcements failed :( ");
        console.log(e);
      });
  }, []);

  const fetchingCategory = (category) => {
    fetch(`${URL_ANNOUNCEMENTS}?categoryId=${category.id}`)
      .then((announcements) => {
        if (announcements.ok) {
          return announcements.json();
        }
        throw announcements;
      })
      .then((announcements) => {
        setAnnouncements(announcements);
        setSelectedCategory(category);
      })
      .catch((e) => {
        console.log("fetching announcements failed :( ");
        console.log(e);
      });
  };

  const isFormVisible = (isVisible) => {
    setIsAdding(isVisible);
  };

  const createNewAnnouncement = () => {};

  return (
    <div className="homeWrapper">
      <NavBar
        isFormVisible={isFormVisible}
        fetchingCategory={fetchingCategory}
        categories={categories}
      />
      <Board
        announcements={announcements}
        selectedCategory={selectedCategory}
        isAdding={isAdding}
        isFormVisible={isFormVisible}
      />
    </div>
  );
};

export default Home;
