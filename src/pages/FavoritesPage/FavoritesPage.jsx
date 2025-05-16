import s from "./FavoritesPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectDb, selectFavorites } from "../../redux/slices/selectors.js";
import OnePsychologistCard from "../../components/OnePsychologistCard/OnePsychologistCard.jsx";
import { useEffect } from "react";

export default function Favorites({ setModalLogin, setModalRegistr }) {
  // const dispatch = useDispatch();
  // const favoritesDb = useSelector(selectFavorites);

  const favoritesDb = useSelector(selectDb);
  const data = favoritesDb.filter((doctor) => doctor.favorites === true);
  console.log(data);

  useEffect(() => {}, [favoritesDb, data]);

  return (
    <section className={s.favoritesBox}>
      <ul className={s.boxList}>
        <OnePsychologistCard
          psychologists={data}
          setModalLogin={setModalLogin}
        />
      </ul>
    </section>
  );
}
