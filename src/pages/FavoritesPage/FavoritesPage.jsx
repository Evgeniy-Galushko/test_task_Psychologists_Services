import s from "./FavoritesPage.module.css";
import { useSelector } from "react-redux";
import { selectDb } from "../../redux/slices/selectors.js";
import OnePsychologistCard from "../../components/OnePsychologistCard/OnePsychologistCard.jsx";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

export default function Favorites({ setModalLogin, setModalRegistr }) {
  const favoritesDb = useSelector(selectDb);
  const data = favoritesDb.filter((doctor) => doctor.favorites === true);
  // console.log(data);

  useEffect(() => {}, [favoritesDb, data]);

  return (
    <section className={s.favoritesBox}>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
        }}
      />
      <ul className={s.boxList}>
        <OnePsychologistCard
          psychologists={data}
          setModalLogin={setModalLogin}
        />
      </ul>
    </section>
  );
}
