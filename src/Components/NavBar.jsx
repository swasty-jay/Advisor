import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
// import Logo from "../assets/logo.png";
import logo from "/src/assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-100 text-dark-900 shadow-md py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="Logo" className="h-30 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 justify-center space-x-6">
            <Link to="/" className="text-xl hover:text-emerald-500">
              HOME
            </Link>
            <Link to="/about" className="text-xl hover:text-emerald-500">
              ABOUT
            </Link>
            <Link to="/services" className="text-xl hover:text-emerald-500">
              SERVICES
            </Link>
            <Link to="/contact" className="text-xl hover:text-emerald-500">
              CONTACT US
            </Link>
            <div className="flex">
              <hr className="border-1 border-slate-500 h-8 justify-center " />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blured-md">
          <Link to="/" className="block px-4 py-2 hover:bg-emerald-500">
            HOME
          </Link>
          <Link to="/about" className="block px-4 py-2 hover:bg-emerald-500">
            ABOUT
          </Link>
          <Link to="/services" className="block px-4 py-2 hover:bg-emerald-500">
            SERVICES
          </Link>
          <Link to="/contact" className="block px-4 py-2 hover:bg-emerald-500">
            CONTACT US
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
