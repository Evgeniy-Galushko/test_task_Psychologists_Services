import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import sprite from "../../img/sprite.svg";
import Navigation from "../Navigation/Navigation.jsx";
import Auth from "../Auth/Auth.jsx";
import AuthorizedUser from "../AuthorizedUser/AuthorizedUser.jsx";

export default function Header({ openModalLogin, openModalRegistr }) {
  const auth = false;
  return (
    <header className={s.header}>
      <ul className={s.headerUl}>
        <li>
          <NavLink to="/" className={s.logo}>
            {/* <svg className={s.logoSvg}>
              <use href={`${sprite}#icon-Logo`} />
            </svg> */}
            psychologists<span className={s.logoDot}>.</span>
            <span className={s.logoSpanGreen}>services</span>
          </NavLink>
        </li>
        <li>
          <Navigation />
        </li>
      </ul>
      {auth ? (
        <AuthorizedUser />
      ) : (
        <Auth
          openModalLogin={openModalLogin}
          openModalRegistr={openModalRegistr}
        />
      )}
    </header>
  );
}
