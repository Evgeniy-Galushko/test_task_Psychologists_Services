import s from "./Psychologists.module.css";
import db from "../../redux/psychologists.json";
import OnePsychologistCard from "../../components/OnePsychologistCard/OnePsychologistCard.jsx";
import { Filter } from "../../components/Filter/Filter.jsx";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn.jsx";
import { useEffect, useState } from "react";
import { filteredData } from "../../utils/filter.js";

export default function Psychologists({ setModalLogin, setModalRegistr }) {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(3);
  const [filter, setFilter] = useState("ShowAll");
  const [listOfDoctors, setListOfDoctors] = useState([]);

  console.log(listOfDoctors);
  const pages = Math.ceil(db.length / limit);
  const handleClick = () => {
    setPage(page + 1);
  };
  const numberOfObjects = page * limit;
  const dbDoctors = db.slice(0, numberOfObjects);
  console.log(dbDoctors);

  console.log(dbDoctors[2].name.slice(4));

  useEffect(() => {
    setListOfDoctors(filteredData(dbDoctors, filter));
  }, [filter, page]);

  const handlChange = (e) => {
    console.log(e.target.value);
    setFilter(e.target.value);
  };

  return (
    <ul className={s.psychologistsBox}>
      <Filter onChange={handlChange} filter={filter} />
      <OnePsychologistCard
        psychologists={listOfDoctors}
        setModalLogin={setModalLogin}
        setModalRegistr={setModalRegistr}
      />
      {page < pages && (
        <LoadMoreBtn handleClick={handleClick}>Load more</LoadMoreBtn>
      )}
    </ul>
  );
}
