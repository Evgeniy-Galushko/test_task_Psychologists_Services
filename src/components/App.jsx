import { lazy, Suspense, useState } from "react";
import { PropagateLoader } from "react-spinners";
import "../components/App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Header/Header.jsx";
import LogIn from "./LogIn/LogIn.jsx";
import ModalCustom from "./ModalCustom/ModalCustom.jsx";
import Registration from "./Registration/Registration.jsx";

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { get } from "firebase/database";
import { dbRef } from "../../firebase.js";
import { setDoctors } from "../redux/slices/userSlice.js";

const HomePage = lazy(() => import("../pages/HomePage/HomePage.jsx"));
const Psychologists = lazy(() =>
  import("../pages/Psychologists/Psychologists.jsx")
);
const Favorites = lazy(() => import("../pages/Favorites/Favorites.jsx"));
const NotFoundPage = lazy(() =>
  import("../pages/NotFoundPage/NotFoundPage.jsx")
);

function App() {
  const [color, setColor] = useState("#54be96");
  const [modalLogin, setModalLogin] = useState(false);
  const [modalRegistr, setModalRegistr] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDb = async () => {
      await get(dbRef)
        .then((doctors) => {
          if (doctors.exists()) {
            dispatch(setDoctors({ db: doctors.val() }));
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    };
    fetchDb();
  }, [dispatch]);

  function openModalLogin() {
    setModalLogin(true);
  }

  function closeModalLogin() {
    setModalLogin(false);
  }

  function openModalRegistr() {
    setModalRegistr(true);
  }

  function closeModalRegistr() {
    setModalRegistr(false);
  }

  return (
    <>
      <ModalCustom isOpen={modalLogin} onClose={closeModalLogin}>
        <LogIn closeModal={closeModalLogin} />
      </ModalCustom>
      <ModalCustom isOpen={modalRegistr} onClose={closeModalRegistr}>
        <Registration closeModal={closeModalRegistr} />
      </ModalCustom>
      <Header
        openModalLogin={openModalLogin}
        openModalRegistr={openModalRegistr}
      />
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
          <Route
            path="/"
            element={<HomePage openModalRegistr={openModalRegistr} />}
          />
          <Route
            path="/psychologists"
            element={
              <Psychologists
                setModalLogin={setModalLogin}
                setModalRegistr={setModalRegistr}
              />
            }
          />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
