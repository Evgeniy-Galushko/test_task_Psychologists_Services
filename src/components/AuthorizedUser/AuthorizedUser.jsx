import s from "./AuthorizedUser.module.css";
import sprite from "../../img/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../redux/slices/userSlice.js";
import { selectName } from "../../redux/slices/selectors.js";
import { NavLink } from "react-router-dom";

export default function AuthorizedUser() {
  const dispatch = useDispatch();
  const nameUser = useSelector(selectName);

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
        <NavLink
          to="/psychologists"
          className={s.buttonLogOut}
          onClick={hendleClick}
        >
          Log out
        </NavLink>
      </li>
    </ul>
  );
}
