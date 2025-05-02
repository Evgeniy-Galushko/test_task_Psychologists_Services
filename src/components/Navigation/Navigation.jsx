import clsx from "clsx";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

export default function Navigation() {
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
      <NavLink
        to="/favorites"
        className={({ isActive }) => clsx(s.link, isActive && s.activeFav)}
      >
        Favorites
      </NavLink>
    </nav>
  );
}
