import { useNavigate, useRouteError } from "react-router-dom";
import ButtonLink from "./ButtonLink";
function Error() {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.mesaage}</p>
      <ButtonLink to="-1">&larr; Go back</ButtonLink>
    </div>
  );
}

export default Error;
