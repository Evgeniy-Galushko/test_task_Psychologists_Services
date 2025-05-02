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
      <li className={s.backgroundImgHome}></li>
    </ul>
  );
}
