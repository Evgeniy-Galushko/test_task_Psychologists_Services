import { lazy, Suspense, useState } from "react";
import { PropagateLoader } from "react-spinners";
import "../components/App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Header/Header.jsx";
import LogInModal from "./LogInModal/LogInModal.jsx";

const HomePage = lazy(() => import("../pages/HomePage/HomePage.jsx"));
const Psychologists = lazy(() =>
  import("../pages/Psychologists/Psychologists.jsx")
);
const Favorites = lazy(() => import("../pages/Favorites/Favorites.jsx"));
const NotFoundPage = lazy(() =>
  import("../pages/NotFoundPage/NotFoundPage.jsx")
);

function App() {
  const [color, setColor] = useState("#3470FF");
  const [modalLogin, setModalLogin] = useState(false);

  function openModal() {
    setModalLogin(true);
  }

  function closeModalLogin() {
    setModalLogin(false);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  return (
    <>
      <LogInModal isOpen={modalLogin} closeModalLogin={closeModalLogin} />
      <Header openModal={openModal} />
      <Suspense
        fallback={
          <PropagateLoader
            color={color}
            className="spiner"
            size={15}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/psychologists" element={<Psychologists />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
