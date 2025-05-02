import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import sprite from "../../img/sprite.svg";
import Navigation from "../Navigation/Navigation.jsx";
import Auth from "../Auth/Auth.jsx";
import { useState } from "react";
import AuthorizedUser from "../AuthorizedUser/AuthorizedUser.jsx";

export default function Header() {
  const auth = false;
  return (
    <section className={s.header}>
      <ul className={s.headerUl}>
        <li>
          <NavLink to="/">
            <svg className={s.logoSvg}>
              <use href={`${sprite}#icon-Logo`} />
            </svg>
          </NavLink>
        </li>
        <li>
          <Navigation />
        </li>
      </ul>
      {auth ? <AuthorizedUser /> : <Auth />}
    </section>
  );
}
