import { Link, useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function ButtonLink({ children, to }) {
  const navigate = useNavigate();
  const className = "text-sm text-blue-500 hover:text-blue-800 hover:underline";
  if (to == "-1") {
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    );
  }
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

export default ButtonLink;
