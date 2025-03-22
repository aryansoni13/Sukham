import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../images/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#rooms", label: "Rooms" },
    { href: "#facilities", label: "Facilities" },
    { href: "#nearby", label: "Nearby" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-40 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div>
            <a
              href="#home"
              className="hover:opacity-90 transition-opacity flex items-center"
            >
              <img
                src={logo}
                alt="Sukham Resort Logo"
                className="h-12 w-auto"
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#rooms"
              rel="noopener noreferrer"
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50 p-2 rounded-lg bg-white shadow-sm hover:bg-gray-50 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>

          {/* Mobile Menu */}
          <div
            className={`
            fixed top-0 right-0 bottom-0 w-72 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-40
            ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
            md:hidden
          `}
          >
            {/* Mobile Menu Header */}
            <div className="p-6 border-b border-gray-100">
              <img
                src={logo}
                alt="Sukham Resort Logo"
                className="h-10 w-auto"
              />
            </div>

            {/* Mobile Menu Items */}
            <div className="flex flex-col px-4 py-2">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center py-4 px-2 text-gray-700 hover:text-primary transition-all duration-200 border-b border-gray-100 hover:bg-gray-50 rounded-lg font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#rooms"
                rel="noopener noreferrer"
                className="mt-4 bg-primary text-white text-center py-3 rounded-lg hover:bg-primary/90 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Now
              </a>
            </div>

            {/* Mobile Menu Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-100 bg-gray-50">
              <div className="text-sm text-gray-500 text-center">
                © {new Date().getFullYear()} Sukham Resort. All rights reserved.
              </div>
            </div>
          </div>

          {/* Overlay */}
          {isMenuOpen && (
            <div
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30 md:hidden"
              onClick={() => setIsMenuOpen(false)}
              aria-hidden="true"
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
