import { useEffect, useState } from "react";
import sprite from "../../img/sprite.svg";
import s from "./Favorites.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDb,
  selectFavorites,
  selectToken,
} from "../../redux/slices/selectors.js";
import { get, update } from "firebase/database";
import { dbRef } from "../../../firebase.js";
import ModalCustom from "../ModalCustom/ModalCustom.jsx";
import AuthorizationWarning from "../AuthorizationWarning/AuthorizationWarning.jsx";
import {
  removeFromFavorites,
  setFavoritesDb,
} from "../../redux/slices/userSlice.js";

export default function Favorites({
  id,
  setModalLogin,
  setModalRegistr,
  favoritesBoolean,
}) {
  const [favorites, setFavorites] = useState(false);
  const [modalRegisterOrLogin, setModalRegisterOrLogin] = useState(false);
  const [idFavorites, setIdFavorites] = useState("");
  const token = useSelector(selectToken);
  const database = useSelector(selectDb);
  const favoritesDb = useSelector(selectFavorites);
  const dispatch = useDispatch();

  // console.log(favoritesBoolean);

  useEffect(() => {
    get(dbRef).then((doctors) => {
      if (doctors.val()) {
        const index = doctors
          .val()
          .findIndex((doctor) => doctor.id === idFavorites);
        if (index === -1) return;
        const oneDoctor = doctors
          .val()
          .filter((doctor) => doctor.id === idFavorites);
        const newDoc = [{ ...oneDoctor[0], favorites: favorites }];
        const updates = {};
        updates[`/${index}/`] = { ...newDoc[0] };
        return update(dbRef, updates);
      }
    });

    // if (favorites) {
    //   const deleteDoctor = favoritesDb.filter(
    //     (doctor) => doctor.id !== idFavorites
    //   );
    //   dispatch(removeFromFavorites(deleteDoctor));
    // } else {
    //   const oneDoctor = database.filter((doctor) => doctor.id === idFavorites);
    //   dispatch(setFavoritesDb(oneDoctor));
    // }
  }, [idFavorites, favorites]);

  console.log(idFavorites);
  console.log(favorites);

  const handlChange = (evt) => {
    if (!token) {
      return setModalRegisterOrLogin(true);
    }

    setIdFavorites(evt.target.id);
    setFavorites(evt.target.checked);

    // if (!database) return;
    // if (favoritesBoolean) {
    // if (favorites) {
    //   const deleteDoctor = favoritesDb.filter(
    //     (doctor) => doctor.id !== idFavorites
    //   );
    //   dispatch(removeFromFavorites(deleteDoctor));
    // } else {
    //   const oneDoctor = database.filter((doctor) => doctor.id === idFavorites);
    //   dispatch(setFavoritesDb(oneDoctor));
    // }
  };

  function closeModalLogin() {
    setModalRegisterOrLogin(false);
    setModalLogin(true);
  }

  function closeModalRegister() {
    setModalRegisterOrLogin(false);
    setModalRegistr(true);
  }

  function closeModa() {
    setModalRegisterOrLogin(false);
  }

  return (
    <div className={s.favorites}>
      <ModalCustom isOpen={modalRegisterOrLogin} onClose={closeModa}>
        <AuthorizationWarning
          onCloseLogin={closeModalLogin}
          onCloseRegister={closeModalRegister}
        />
      </ModalCustom>
      <input
        className={s.input}
        value={favoritesBoolean}
        id={id}
        type="checkbox"
        onChange={handlChange}
        checked={favorites}
      />
      <label htmlFor={id}>
        {favoritesBoolean ? (
          <svg className={s.iconHeart}>
            <use href={`${sprite}#icon-green_heart`} />
          </svg>
        ) : (
          <svg
            className={s.iconHeart}
            viewBox="0 0 26 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.5766 2.99416C22.0233 2.44058 21.3663 2.00144 20.6433 1.70184C19.9202 1.40223 19.1452 1.24802 18.3625 1.24802C17.5798 1.24802 16.8047 1.40223 16.0817 1.70184C15.3586 2.00144 14.7016 2.44058 14.1483 2.99416L13 4.14249L11.8516 2.99416C10.734 1.87649 9.21809 1.2486 7.63747 1.2486C6.05685 1.2486 4.54097 1.87649 3.4233 2.99416C2.30563 4.11183 1.67773 5.62771 1.67773 7.20833C1.67773 8.78895 2.30563 10.3048 3.4233 11.4225L4.57163 12.5708L13 20.9992L21.4283 12.5708L22.5766 11.4225C23.1302 10.8692 23.5693 10.2122 23.869 9.48913C24.1686 8.76605 24.3228 7.99102 24.3228 7.20833C24.3228 6.42563 24.1686 5.65061 23.869 4.92753C23.5693 4.20445 23.1302 3.54748 22.5766 2.99416Z"
              stroke="#191A15"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </label>
    </div>
  );
}
