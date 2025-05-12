import clsx from "clsx";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectToken } from "../../redux/slices/selectors.js";

export default function Navigation() {
  const tokenBoolean = useSelector(selectToken);
  return (
    <nav className={s.navHeder}>
      <NavLink
        to="/"
        className={({ isActive }) => clsx(s.link, isActive && s.activeHome)}
      >
        Home
      </NavLink>
      <NavLink
        to="/psychologists"
        className={({ isActive }) => clsx(s.link, isActive && s.activePsycho)}
      >
        Psychologists
      </NavLink>
      {tokenBoolean && (
        <NavLink
          to="/favorites"
          className={({ isActive }) => clsx(s.link, isActive && s.activeFav)}
        >
          Favorites
        </NavLink>
      )}
    </nav>
  );
}
