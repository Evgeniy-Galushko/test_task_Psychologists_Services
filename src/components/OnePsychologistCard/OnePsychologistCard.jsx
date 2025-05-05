import s from "./OnePsychologistCard.module.css";
import sprite from "../../img/sprite.svg";
import Favorites from "../Favorites/Favorites.jsx";

export default function OnePsychologistCard({ psychologists }) {
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
          <ul className={s.contentBox}>
            <li className={s.boxImg}>
              <img
                src={avatar_url}
                alt="avatar"
                className={s.imgPsychologist}
              />
            </li>
            <li>
              <ul>
                <li>
                  <p className={s.speciality}>Psychologist</p>
                  <h2 className={s.name}>{name}</h2>
                </li>
                <li>
                  <svg className={s.iconRating}>
                    <use href={`${sprite}#icon-Star-2`} />
                  </svg>
                  <p className={s.ratingPrice}>Rating: {rating}</p>
                  <p className={s.ratingPrice}>
                    Price / 1 hour:{" "}
                    <span className={s.ratingPriceColor}>
                      {price_per_hour}&#x24;
                    </span>
                  </p>
                  <Favorites />
                </li>
              </ul>
              <ul>
                <li className={s.skillsBox}>
                  <p className={s.skills}>
                    Experience:{" "}
                    <span className={s.skillsColor}>{experience}</span>
                  </p>
                </li>
                <li className={s.skillsBox}>
                  <p className={s.skills}>
                    License: <span className={s.skillsColor}>{license}</span>
                  </p>
                </li>
              </ul>
              <ul>
                <li className={s.skillsBox}>
                  <p className={s.skills}>
                    Specialization:{" "}
                    <span className={s.skillsColor}>{specialization}</span>
                  </p>
                </li>
                <li className={s.skillsBox}>
                  <p className={s.skills}>
                    Initial_consultation:{" "}
                    <span className={s.skillsColor}>
                      {initial_consultation}
                    </span>
                  </p>
                </li>
              </ul>
              <p className={s.about}>{about}</p>
              <button type="button" className={s.buttonReadMore}>
                Read more
              </button>
            </li>
          </ul>
        </li>
      );
    }
  );
}
