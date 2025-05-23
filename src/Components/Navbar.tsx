import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/Logo.webp";
import { TiThMenu, TiTimes } from "react-icons/ti"; // <- added close icon
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="bg-indigo-500 text-white relative overflow-hidden">
      {/* Navbar */}
      <div className="flex justify-around items-center p-4 md:px-32">
        {/* Logo */}
        <Link to="/">
          <img src={Logo} alt="Website Logo" className="h-12" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden xl:flex gap-6 font-bold">
          <NavLink
            to="/track"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? "text-orange-700" : "text-white"
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
          >
            Track Shipment
          </NavLink>

          <NavLink
            to="/allShipment"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? "text-orange-700" : "text-white"
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
          >
            All Shipment
          </NavLink>
        </div>

        {/* Mobile Menu Icon */}
        <div className="xl:hidden">
          {menu ? (
            <TiTimes
              className="text-red-900 w-8 h-8 cursor-pointer"
              onClick={() => setMenu(false)}
            />
          ) : (
            <TiThMenu
              className="text-white w-8 h-8 cursor-pointer"
              onClick={() => setMenu(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`xl:hidden overflow-hidden transition-all duration-300 ease-in-out  ${
          menu ? "max-h-40 py-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-4 px-6 font-semibold items-center">
          <NavLink
          onClick={() => setMenu(false)}
            to="/track"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? "text-orange-700" : "text-white"
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
          >
            Track Shipment
          </NavLink>
          <NavLink
          onClick={() => setMenu(false)}
            to="/allShipment"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? "text-orange-700" : "text-white"
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
          >
            All Shipment
          </NavLink>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
