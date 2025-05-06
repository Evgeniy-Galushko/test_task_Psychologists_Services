import s from "./OnePsychologistCard.module.css";
import sprite from "../../img/sprite.svg";
import Favorites from "../Favorites/Favorites.jsx";
import clsx from "clsx";
import { useState } from "react";

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
      const [buttonReadMore, setButtonReadMore] = useState(true);
      const [userReviews, setUserReviews] = useState(false);

      const handlClickReadMore = () => {
        setButtonReadMore(false);
        setUserReviews(true);
      };

      const handlClickHideReviews = () => {
        setButtonReadMore(true);
        setUserReviews(false);
      };

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
                  {buttonReadMore && (
                    <button
                      type="button"
                      className={s.buttonReadMore}
                      onClick={handlClickReadMore}
                    >
                      Read more
                    </button>
                  )}
                </li>
              </ul>
              {userReviews && (
                <ul className={s.boxReviews}>
                  {reviews.map(({ comment, rating, reviewer }, index) => {
                    console.log(reviewer.slice(0, 1));
                    return (
                      <li key={index}>
                        <ul className={s.oneReview}>
                          <li>
                            <div className={s.avatar}>
                              <p className={s.letter}>{reviewer.slice(0, 1)}</p>
                            </div>
                          </li>
                          <li>
                            <h3 className={s.username}>{reviewer}</h3>
                            <div className={s.divIconRating}>
                              <svg className={s.iconRating}>
                                <use href={`${sprite}#icon-Star-2`} />
                              </svg>
                              <p className={s.reviewsRating}>{rating}</p>
                            </div>
                          </li>
                        </ul>
                        <p className={s.about}>{comment}</p>
                      </li>
                    );
                  })}
                  <button
                    type="button"
                    className={s.buttonHideReviews}
                    onClick={handlClickHideReviews}
                  >
                    Hide reviews
                  </button>
                </ul>
              )}
            </li>
          </ul>
        </li>
      );
    }
  );
}
