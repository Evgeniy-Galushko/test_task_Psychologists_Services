import s from "./Auth.module.css";

export default function Auth() {
  return (
    <ul className={s.boxAuth}>
      <li>
        <button className={s.buttonLogIn}>Log In</button>
      </li>
      <li>
        <button className={s.buttonRegistr}>Registration</button>
      </li>
    </ul>
  );
}
