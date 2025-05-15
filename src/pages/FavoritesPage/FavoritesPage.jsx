import s from "./FavoritesPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorites } from "../../redux/slices/selectors.js";
import OnePsychologistCard from "../../components/OnePsychologistCard/OnePsychologistCard.jsx";
import { useEffect } from "react";

export default function Favorites({ setModalLogin, setModalRegistr }) {
  // const dispatch = useDispatch();
  const favoritesDb = useSelector(selectFavorites);
  console.log(favoritesDb);

  useEffect(() => {}, [favoritesDb]);

  return (
    <section className={s.favoritesBox}>
      <ul className={s.boxList}>
        <OnePsychologistCard
          psychologists={favoritesDb}
          setModalLogin={setModalLogin}
          setModalRegistr={setModalRegistr}
        />
      </ul>
    </section>
  );
}
