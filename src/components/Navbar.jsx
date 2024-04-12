import { FaShoppingCart } from "react-icons/fa"
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between bg-blue-500">

        <NavLink to="/">
          <div>
            <img src="../logo.svg" alt="logo" className="h-14"/>
          </div>
        </NavLink>
        

        <div>

          <NavLink to="/">
            <p>Home</p>
          </NavLink>

          <NavLink to="/Cart">
            <div>
              <FaShoppingCart/>
            </div>
          </NavLink>

        </div>

      </nav>
    </div>
  );
};

export default Navbar;
