import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [cart] = useCart();
  const handleLogOut = () => {
    logoutUser()
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };
  const navOptions = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/menu">Menu</NavLink>
      </li>
      <li>
        <NavLink to="/order/Salad">Order Food</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/cart">
          <button className="btn btn-xs">
            <FaShoppingCart className="text-xl text-orange-500" />

            <div className="badge badge-secondary">+{cart.length}</div>
          </button>
        </NavLink>
      </li>
      {user && isAdmin && (
        <li>
          <NavLink to="/dashboard/adminHome">Dashboard</NavLink>
        </li>
      )}
      {user && !isAdmin && (
        <li>
          <NavLink to="/dashboard/userHome">Dashboard</NavLink>
        </li>
      )}
      {user ? (
        <>
          {/* <span>{user?.displayName}</span> */}
          <button onClick={handleLogOut}>Logout</button>
        </>
      ) : (
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      )}
    </>
  );
  return (
    <>
      <div className="navbar fixed z-10 bg-black bg-opacity-30 text-white max-w-screen-xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Restaurent</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        {/* <div className="navbar-end">
          <a className="btn">Button</a>
        </div> */}
      </div>
    </>
  );
};

export default Navbar;
