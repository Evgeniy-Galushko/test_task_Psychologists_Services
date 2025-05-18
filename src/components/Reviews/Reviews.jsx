import { useState } from "react";
import sprite from "../../img/sprite.svg";
import s from "./Reviews.module.css";
import clsx from "clsx";

export default function Reviews({
  reviews,
  openModalAppointment,
  id,
  setIdDoctor,
}) {
  const [buttonReadMore, setButtonReadMore] = useState(true);
  const [userReviews, setUserReviews] = useState(false);

  const handlClickReadMore = (id) => {
    setIdDoctor(id.target.id);
    setButtonReadMore(false);
    setUserReviews(true);
  };

  const handlClickHideReviews = () => {
    setButtonReadMore(true);
    setUserReviews(false);
  };

  return (
    <ul className={clsx(userReviews && s.reviews)}>
      <li>
        {buttonReadMore && (
          <button
            id={id}
            type="button"
            className={s.buttonReadMore}
            onClick={handlClickReadMore}
          >
            Read more
          </button>
        )}
      </li>
      <li>
        {userReviews && (
          <ul className={s.boxReviews}>
            {reviews.map(({ comment, rating, reviewer }, index) => {
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
            <li className={s.boxButton}>
              <button
                type="button"
                className={s.buttonHideReviews}
                onClick={handlClickHideReviews}
              >
                Hide reviews
              </button>
              <button
                id={id}
                type="button"
                className={s.buttonMakeAnAppointment}
                onClick={openModalAppointment}
              >
                Make an appointment
              </button>
            </li>
          </ul>
        )}
      </li>
    </ul>
  );
}
