import s from "./Psychologists.module.css";
import OnePsychologistCard from "../../components/OnePsychologistCard/OnePsychologistCard.jsx";
import { Filter } from "../../components/Filter/Filter.jsx";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn.jsx";
import { useEffect, useState } from "react";
import { filteredData } from "../../utils/filter.js";
import { Toaster } from "react-hot-toast";
import { selectDb } from "../../redux/slices/selectors.js";
import { useSelector } from "react-redux";

export default function Psychologists({ setModalLogin, setModalRegistr }) {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(3);
  const [filter, setFilter] = useState("ShowAll");
  const [listOfDoctors, setListOfDoctors] = useState(null);

  const database = useSelector(selectDb);

  // console.log(database);

  const pages = Math.ceil(database.length / limit);
  const handleClick = () => {
    setPage(page + 1);
  };
  const numberOfObjects = page * limit;
  const dbDoctors = database.slice(0, numberOfObjects);

  useEffect(() => {
    setListOfDoctors(filteredData(dbDoctors, filter));
  }, [filter, page, database]);

  const handlChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <section className={s.psychologistsBox}>
      <Filter onChange={handlChange} filter={filter} />
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
        }}
      />
      <ul className={s.boxList}>
        <OnePsychologistCard
          psychologists={listOfDoctors}
          setModalLogin={setModalLogin}
          setModalRegistr={setModalRegistr}
        />
      </ul>
      {page < pages && (
        <LoadMoreBtn handleClick={handleClick}>Load more</LoadMoreBtn>
      )}
    </section>
  );
}
