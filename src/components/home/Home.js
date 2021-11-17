import { useEffect, useState } from "react";
import Board from "../board/Board";
import NavBar from "../navBar.js/NavBar";
import "./Home.css";


const Home = () => {
  const [categories, setCategories] = useState([]);
  const [announcement, setAnnouncement] = useState({});
  const [announcements, setAnnouncements] = useState([]);
  const [allAnnouncements, setAllAnnouncements] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({
    title: "All Categories",
  });

  const [isAdding, setIsAdding] = useState(false);
  


  const URL_CATEGORIES = "https://buletingboard-backend.herokuapp.com/Categories";
  const URL_ANNOUNCEMENTS = "https://buletingboard-backend.herokuapp.com/Announcements";

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
        setAnnouncement({ category: categories[0]?.id });
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

  const fetchAllAnnouncements = () => {
    setAnnouncements(allAnnouncements);
    setSelectedCategory({ title: "All Categories" });
  };

  const isFormVisible = (isVisible) => {
    setIsAdding(isVisible);
  };

  const createNewAnnouncement = (e) => {
    e.preventDefault();
    fetch(URL_ANNOUNCEMENTS, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: announcement.title,
        text: announcement.text,
        categoryId: announcement.category,
      }),
    })
      .then((r) => r.json())
      .then((newAnnouncement) => {
        setAnnouncements([...announcements, newAnnouncement]);
        setAllAnnouncements([...allAnnouncements, newAnnouncement]);
        setIsAdding(false);
        clearForm();
      });
  };

  const clearForm = () => {
    setAnnouncement({});
  };

  const captureTitle = (e) => {
    setAnnouncement({ ...announcement, title: e.target.value });
  };

  const captureText = (e) => {
    setAnnouncement({ ...announcement, text: e.target.value });
  };

  const captureCategory = (e) => {
    setAnnouncement({ ...announcement, category: e.target.value });
  };

  const deleteAnnouncement = (id) => {
    fetch(`${URL_ANNOUNCEMENTS}/${id}`, { method: "DELETE" }).then((result) => {
      setAnnouncements(
        announcements.filter((announcements) => {
          return announcements.id !== id;
        })
      );
      setAllAnnouncements(announcements);
    });
  };

  return (
    <div className='homeWrapper'>
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
