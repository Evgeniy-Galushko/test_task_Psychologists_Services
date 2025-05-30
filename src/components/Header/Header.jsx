import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import Navigation from "../Navigation/Navigation.jsx";
import Auth from "../Auth/Auth.jsx";
import AuthorizedUser from "../AuthorizedUser/AuthorizedUser.jsx";
import { selectToken } from "../../redux/slices/selectors.js";
import { useSelector } from "react-redux";

export default function Header({ openModalLogin, openModalRegistr }) {
  const token = useSelector(selectToken);

  return (
    <header className={s.header}>
      <siction className={s.boxsWidth}>
        <ul className={s.headerUl}>
          <li>
            <NavLink to="/" className={s.logo}>
              psychologists<span className={s.logoDot}>.</span>
              <span className={s.logoSpanGreen}>services</span>
            </NavLink>
          </li>
          <li>
            <Navigation />
          </li>
        </ul>
        {token ? (
          <AuthorizedUser />
        ) : (
          <Auth
            openModalLogin={openModalLogin}
            openModalRegistr={openModalRegistr}
          />
        )}
      </siction>
    </header>
  );
}
