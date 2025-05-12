import s from "./AuthorizationWarning.module.css";
import Auth from "../Auth/Auth.jsx";

export default function AuthorizationWarning() {
  return (
    <div className={s.boxWarningAvt}>
      <Auth />
    </div>
  );
}
