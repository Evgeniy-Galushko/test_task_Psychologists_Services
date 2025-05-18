import s from "./OnePsychologistCard.module.css";
import sprite from "../../img/sprite.svg";
import Favorites from "../Favorites/Favorites.jsx";
import clsx from "clsx";
import Reviews from "../Reviews/Reviews.jsx";
import MakeAnAppointment from "../MakeAnAppointment/MakeAnAppointment.jsx";
import { useState } from "react";
import ModalAppointment from "../ModalAppointment/ModalAppointment.jsx";

export default function OnePsychologistCard({
  psychologists,
  setModalLogin,
  setModalRegistr,
}) {
  const [idDoctor, setIdDoctor] = useState("");
  const [modalAppointment, setModalAppointment] = useState(false);
  const [appointmentBooking, setAppointmentBooking] = useState({});

  if (!psychologists) {
    return;
  }

  function openModalAppointment(id) {
    setIdDoctor(id.target.id);
    if (idDoctor) {
      const oneDoctor = psychologists.filter(
        (doctor) => doctor.id === idDoctor
      );
      setAppointmentBooking({
        avatar: oneDoctor[0].avatar_url,
        name: oneDoctor[0].name,
      });
      setModalAppointment(true);
    }
  }

  function closeModalAppointment() {
    setIdDoctor("");
    setAppointmentBooking({});
    setModalAppointment(false);
  }

  return psychologists.map(
    ({
      id,
      favorites,
      about,
      avatar_url,
      experience,
      initial_consultation,
      license,
      name,
      price_per_hour,
      rating,
      reviews,
      specialization,
    }) => {
      return (
        <li key={id} className={s.oneCart}>
          <ModalAppointment
            isOpen={modalAppointment}
            onClose={closeModalAppointment}
          >
            <MakeAnAppointment
              closeModal={closeModalAppointment}
              appointmentBooking={appointmentBooking}
              avatar={avatar_url}
              name={name}
              id={id}
            />
          </ModalAppointment>
          <ul className={s.contentBox}>
            <li className={s.boxImg}>
              <img
                src={avatar_url}
                alt="avatar"
                className={s.imgPsychologist}
              />
            </li>
            <li className={s.AboutTheDoctor}>
              <ul className={s.boxName}>
                <li>
                  <p className={s.speciality}>Psychologist</p>
                  <h2 className={s.name}>{name}</h2>
                </li>
                <li className={s.boxRatingPrice}>
                  <svg className={s.iconRating}>
                    <use href={`${sprite}#icon-Star-2`} />
                  </svg>
                  <p className={clsx(s.ratingPrice, s.rating)}>
                    Rating: {rating}
                  </p>
                  <p className={clsx(s.ratingPrice, s.price)}>
                    Price / 1 hour:{" "}
                    <span className={s.ratingPriceColor}>
                      {price_per_hour}&#x24;
                    </span>
                  </p>
                  <Favorites
                    id={id}
                    favoritesBoolean={favorites}
                    setModalLogin={setModalLogin}
                    setModalRegistr={setModalRegistr}
                  />
                </li>
              </ul>
              <ul className={s.skils}>
                <li className={s.skillsBox}>
                  <p className={s.skillsParagraph}>
                    Experience:{" "}
                    <span className={s.skillsColor}>{experience}</span>
                  </p>
                  <p className={s.skillsParagraph}>
                    License: <span className={s.skillsColor}>{license}</span>
                  </p>
                </li>
                <li className={s.skillsBox}>
                  <p className={s.skillsParagraph}>
                    Specialization:{" "}
                    <span className={s.skillsColor}>{specialization}</span>
                  </p>
                  <p className={s.skillsParagraph}>
                    Initial_consultation:{" "}
                    <span className={s.skillsColor}>
                      {initial_consultation}
                    </span>
                  </p>
                </li>
              </ul>
              <ul className={s.aboutButton}>
                <li>
                  <p className={s.about}>{about}</p>
                </li>
                <li>
                  <Reviews
                    setIdDoctor={setIdDoctor}
                    reviews={reviews}
                    id={id}
                    openModalAppointment={openModalAppointment}
                  />
                </li>
              </ul>
            </li>
          </ul>
        </li>
      );
    }
  );
}
