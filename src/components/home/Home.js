import { useEffect, useState } from "react";
import Board from "../board/Board";
import NavBar from "../navBar.js/NavBar";
import "./Home.css";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [allAnnouncements, setAllAnnouncements] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({});
  const [isAdding, setIsAdding] = useState(false);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [category, setCategory] = useState(null);

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
        setCategory(categories[0]?.id)
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
        setAllAnnouncements(announcements);
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

  const fetchAllAnnouncements =() => {
    setAnnouncements(allAnnouncements)
  }

  const isFormVisible = (isVisible) => {
    setIsAdding(isVisible);
  };

  const createNewAnnouncement = (e) => {
    e.preventDefault();
    fetch(URL_ANNOUNCEMENTS, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: title, text: text, categoryId:category }),
    }).then((r) => r.json())
        .then((newAnnouncement) => {
          setAnnouncements([...announcements,newAnnouncement])
          setAllAnnouncements([...allAnnouncements,newAnnouncement])
          setIsAdding(false);
        });
  };

  const captureTitle = (e) => {
    setTitle(e.target.value);
  };

  const captureText = (e) => {
    setText(e.target.value);
  };

  const captureCategory = (e) => {
    setCategory(e.target.value)
  };

  const deleteAnnouncement = () => {
    console.log("Delete announcement")
  };


  return (
    <div className="homeWrapper">
      <NavBar
        isFormVisible={isFormVisible}
        fetchingCategory={fetchingCategory}
        categories={categories}
        fetchAllAnnouncements={fetchAllAnnouncements}
      />
      <Board
        announcements={announcements}
        selectedCategory={selectedCategory}
        isAdding={isAdding}
        isFormVisible={isFormVisible}
        createNewAnnouncement={createNewAnnouncement}
        captureTitle={captureTitle}
        captureText={captureText}
        captureCategory={captureCategory}
        categories={categories}
        deleteAnnouncement={deleteAnnouncement}
      />
    </div>
  );
};

export default Home;
