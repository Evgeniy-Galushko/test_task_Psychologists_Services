import s from "./Psychologists.module.css";
import db from "../../redux/psychologists.json";
import OnePsychologistCard from "../../components/OnePsychologistCard/OnePsychologistCard.jsx";
import { Filter } from "../../components/Filter/Filter.jsx";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn.jsx";
import { useState } from "react";
import ModalCustom from "../../components/ModalCustom/ModalCustom.jsx";
import MakeAnAppointment from "../../components/MakeAnAppointment/MakeAnAppointment.jsx";

export default function Psychologists() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(3);
  const pages = Math.ceil(db.length / limit);
  const handleClick = () => {
    setPage(page + 1);
  };
  const numberOfObjects = page * limit;

  const onePage = db.slice(0, numberOfObjects);

  return (
    <ul className={s.psychologistsBox}>
      <Filter />
      <OnePsychologistCard psychologists={onePage} />
      {page < pages && (
        <LoadMoreBtn handleClick={handleClick}>Load more</LoadMoreBtn>
      )}
    </ul>
  );
}
