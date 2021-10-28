import { useEffect, useState } from "react";
import Board from "../board/Board";
import NavBar from "../navBar.js/NavBar";
import "./Home.css";
const Home = () => {
  const [categories, setCategories] = useState([]);
  const [announcements, setAnnouncements] = useState([]);

  const UrlCategories = "http://localhost:8000/Categories";
  const UrlAnnouncements = "http://localhost:8000/Announcements";

  useEffect(() => {
    fetch(UrlCategories)
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
        console.log("fetching columns failed :( ");
        console.log(e);
      });

    fetch(UrlAnnouncements)
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

  return (
    <div className='homeWrapper'>
      <NavBar categories={categories} />
      <Board categories={categories} announcements={announcements} />
    </div>
  );
};

export default Home;
