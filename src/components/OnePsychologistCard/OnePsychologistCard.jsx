import s from "./OnePsychologistCard.module.css";
import sprite from "../../img/sprite.svg";
import Favorites from "../Favorites/Favorites.jsx";
import clsx from "clsx";
import Reviews from "../Reviews/Reviews.jsx";
import ModalCustom from "../ModalCustom/ModalCustom.jsx";
import MakeAnAppointment from "../MakeAnAppointment/MakeAnAppointment.jsx";
import { useState } from "react";

export default function OnePsychologistCard({ psychologists }) {
  const [modalAppointment, setModalAppointment] = useState(false);
  if (!psychologists) {
    return;
  }

  function openModalAppointment() {
    setModalAppointment(true);
  }

  function closeModalAppointment() {
    setModalAppointment(false);
  }
  return psychologists.map(
    (
      {
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
      },
      index
    ) => {
      return (
        <li key={index} className={s.oneCart}>
          <ModalCustom
            isOpen={modalAppointment}
            onClose={closeModalAppointment}
          >
            <MakeAnAppointment
              closeModal={closeModalAppointment}
              avatar={avatar_url}
              name={name}
            />
          </ModalCustom>
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
                  <Favorites />
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
                    reviews={reviews}
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
