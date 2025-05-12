import s from "./AuthorizedUser.module.css";
import sprite from "../../img/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../redux/slices/userSlice.js";
import { selectName } from "../../redux/slices/selectors.js";

export default function AuthorizedUser() {
  const dispatch = useDispatch();
  const nameUser = useSelector(selectName);

  console.log(nameUser);

  const hendleClick = () => {
    dispatch(removeUser());
  };
  return (
    <ul className={s.authorizedUserBox}>
      <li className={s.user}>
        <div className={s.iconUser}>
          <svg className={s.icon}>
            <use href={`${sprite}#icon-avatar`} />
          </svg>
        </div>
        <p className={s.nameUser}>{!nameUser ? "user" : nameUser}</p>
      </li>
      <li>
        <button className={s.buttonLogOut} type="button" onClick={hendleClick}>
          Log out
        </button>
      </li>
    </ul>
  );
}
