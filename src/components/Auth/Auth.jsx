import s from "./Auth.module.css";

export default function Auth({ openModalLogin, openModalRegistr }) {
  return (
    <ul className={s.boxAuth}>
      <li>
        <button className={s.buttonLogIn} onClick={openModalLogin}>
          Log In
        </button>
      </li>
      <li>
        <button className={s.buttonRegistr} onClick={openModalRegistr}>
          Registration
        </button>
      </li>
    </ul>
  );
}
