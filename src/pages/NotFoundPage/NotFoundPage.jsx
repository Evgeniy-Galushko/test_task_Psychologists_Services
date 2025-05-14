import { NavLink } from "react-router-dom";
import s from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <div className={s.notFoundPage}>
      <div className={s.div}>
        <h1 className={s.title}>Sorry, there is no such page!</h1>
        <NavLink to="/" className={s.link}>
          Return to home page
        </NavLink>
      </div>
    </div>
  );
}
