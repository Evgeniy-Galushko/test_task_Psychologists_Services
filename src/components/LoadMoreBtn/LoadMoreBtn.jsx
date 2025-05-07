import s from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ children, handleClick }) {
  return (
    <button className={s.btn} onClick={handleClick} type="button">
      {children}
    </button>
  );
}
