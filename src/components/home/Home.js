import { useEffect, useState } from "react";
import Board from "../board/Board";

const Home = () => {
  const [categories, setCategories] = useState([]);
  // const [announcement, setAnnouncement] = useState([]);

  const Url = "http://localhost:8000/Categories";

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
  }, []);

  return (
    <div>
      <Board categories={categories} />
    </div>
  );
};

export default Home;
