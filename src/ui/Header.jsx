import { Link } from "react-router-dom";
import SearchOrder from "../features/order/searchOrder";
import UserName from "../features/user/UserName";

function Header() {
  return (
    <header className="font-pizza flex items-center justify-between border-b border-stone-200 bg-yellow-500 px-4 py-3 sm:px-6">
      <Link to={"/"} className="tracking-widest">
        Fast React Pizza
      </Link>
      <SearchOrder />

      <UserName />
    </header>
  );
}

export default Header;
