import { Link } from "react-router-dom";
import Logo from "../assets/Logo.webp";
import { TiThMenu, TiTimes } from "react-icons/ti"; // <- added close icon
import { useState } from "react";

const Hello = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="bg-indigo-500 text-white relative overflow-hidden">
      {/* Navbar */}
      <div className="flex justify-between items-center p-4 md:px-32">
        {/* Logo */}
        <Link to="/">
          <img src={Logo} alt="Website Logo" className="h-12" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden xl:flex gap-6 font-bold">
          <Link to="/">Track Shipment</Link>
          <Link to="/">Status</Link>
          <Link to="/">Admin</Link>
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
          <Link to="/" onClick={() => setMenu(false)}>Track Shipment</Link>
          <Link to="/" onClick={() => setMenu(false)}>Status</Link>
          <Link to="/" onClick={() => setMenu(false)}>Admin</Link>
        </div>
      </div>
    </div>
  );
};

export default Hello;
