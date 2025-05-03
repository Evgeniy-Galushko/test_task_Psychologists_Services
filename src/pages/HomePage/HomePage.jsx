import s from "./HomePage.module.css";
import sprite from "../../img/sprite.svg";

export default function HomePage() {
  return (
    <ul className={s.sectionHome}>
      <li className={s.greetings}>
        <h1 className={s.titleHome}>
          The road to the <span className={s.titleGreen}>depths</span> of the
          human soul
        </h1>
        <p className={s.paragraphHome}>
          We help you to reveal your potential, overcome challenges and find a
          guide in your own life with the help of our experienced psychologists.
        </p>
        <button className={s.buttonHome}>
          Get started
          <svg className={s.icon}>
            <use href={`${sprite}#icon-Arrow-16`} />
          </svg>
        </button>
      </li>
      <li className={s.backgroundImgHome}>
        <ul>
          <li className={s.boxQuestion}>
            <svg className={s.iconQuestion}>
              <use href={`${sprite}#icon-question`} />
            </svg>
          </li>
          <li className={s.boxPeople}>
            <svg className={s.iconPeople}>
              <use href={`${sprite}#icon-mdi_users`} />
            </svg>
          </li>
          <li className={s.boxExperienced}>
            <ul className={s.experienced}>
              <li className={s.iconBox}>
                <svg className={s.iconExperienced}>
                  <use href={`${sprite}#icon-green_bird`} />
                </svg>
              </li>
              <li>
                <p className={s.experiencedParagraph}>
                  Experienced psychologists
                </p>
                <p className={s.experiencedNumber}>15,000</p>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  );
}
