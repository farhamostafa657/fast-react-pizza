import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Button({ children, disabled, to, type, onClick }) {
  const base =
    "transition-all text-sm inline-block rounded-full bg-yellow-400  font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed ";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4 ",
    small: base + " py-2 md:py-2.5 md:px-5 text-xs",
    round: base + " px-2.5  py-1 md:py-2 md:px-3.5 text-xs",
    secondary:
      " px-4 py-3 md:px-6 md:py-4 transition-all text-sm  inline-block rounded-full     font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed focus:text-stone-50 ",
  };
  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );
  }

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
