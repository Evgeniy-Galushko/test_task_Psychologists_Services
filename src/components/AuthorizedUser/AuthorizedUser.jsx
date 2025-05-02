import s from "./AuthorizedUser.module.css";
import sprite from "../../img/sprite.svg";

export default function AuthorizedUser() {
  return (
    <ul className={s.authorizedUserBox}>
      <li className={s.user}>
        <div className={s.iconUser}>
          <svg className={s.icon}>
            <use href={`${sprite}#icon-avatar`} />
          </svg>
        </div>
        <p className={s.nameUser}>name</p>
      </li>
      <li>
        <button className={s.buttonLogOut}>Log out</button>
      </li>
    </ul>
  );
}
