import { useEffect, useState } from "react";
import Announcement from "../announcement/Announcement";
import Board from "../board/Board";
import "./Home.css";
const Home = () => {
  const [categories, setCategories] = useState([]);
  const [ansemester1, setAnsemester1] = useState([]);
  const [ansemester2, setAnsemester2] = useState([]);
  const [ansemester3, setAnsemester3] = useState([]);

  // const [announcement, setAnnouncement] = useState([]);

  const Url = "http://localhost:8000/Categories";
  const Urlan1 = "http://localhost:8000/Announcements?categoryId=0";
  const Urlan2 = "http://localhost:8000/Announcements?categoryId=1";
  const Urlan3 = "http://localhost:8000/Announcements?categoryId=2";

  useEffect(() => {
    fetch(Url)
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

    fetch(Urlan1)
      .then((announcements) => {
        if (announcements.ok) {
          return announcements.json();
        }

        throw announcements;
      })
      .then((announcements) => {
        console.log(announcements, "semester1");
        setAnsemester1(announcements);
      })
      .catch((e) => {
        console.log("fetching columns failed :( ");
        console.log(e);
      });

    fetch(Urlan2)
      .then((announcements) => {
        if (announcements.ok) {
          return announcements.json();
        }

        throw announcements;
      })
      .then((announcements) => {
        console.log(announcements, "semester2");
        setAnsemester2(announcements);
      })
      .catch((e) => {
        console.log("fetching columns failed :( ");
        console.log(e);
      });

    fetch(Urlan3)
      .then((announcements) => {
        if (announcements.ok) {
          return announcements.json();
        }

        throw announcements;
      })
      .then((announcements) => {
        console.log(announcements, "semester3");
        setAnsemester3(announcements);
      })
      .catch((e) => {
        console.log("fetching columns failed :( ");
        console.log(e);
      });
  }, []);

  return (
    <div className='homeWrapper'>
      <Board categories={categories} />
    </div>
  );
};

export default Home;
