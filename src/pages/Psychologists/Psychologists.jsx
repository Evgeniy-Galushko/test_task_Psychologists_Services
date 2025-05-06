import s from "./Psychologists.module.css";
import db from "../../redux/psychologists.json";
import OnePsychologistCard from "../../components/OnePsychologistCard/OnePsychologistCard.jsx";
import { Filter } from "../../components/Filter/Filter.jsx";

export default function Psychologists() {
  console.log(db);

  return (
    <ul className={s.psychologistsBox}>
      <Filter />
      <OnePsychologistCard psychologists={db} />
    </ul>
  );
}
