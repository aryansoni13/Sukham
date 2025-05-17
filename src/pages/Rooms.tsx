import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  ArrowLeft,
} from "lucide-react";
import Dorm from "../images/Rooms/Dorm.png";
import JuniorRoom2 from "../images/Rooms/JuniorRoom2.jpg";
import FamilyRoom3 from "../images/Rooms/FamilyRoom3.jpg";
import FamilyRoom4 from "../images/Rooms/FamilyRoom4.jpg";
import FamilyRoom5 from "../images/Rooms/FamilyRoom5.jpg";
import JuniorRoom6 from "../images/Rooms/JuniorRoom6.jpg";
import Logo from "../images/logo.png";

const rooms = [
  {
    id: 1,
    name: "Dormitory Room",
    image: Dorm,
    description:
      "Dormitory where 10 people can stay comfortably with attached bathroom.",
    price: "₹750",
    capacity: "Maximum 10 people",
    additionalInfo: "per head + tax",
  },
  {
    id: 2,
    name: "Junior Room 2",
    image: JuniorRoom2,
    description:
      "Only two adults can stay in junior room with attached bathroom.",
    price: "₹1,800",
    capacity: "2 Adults",
    additionalInfo: "+ tax",
  },
  {
    id: 3,
    name: "Family Room 3",
    image: FamilyRoom3,
    description:
      "Family room where 2 adults and 2 children can stay comfortably",
    price: "₹3,000",
    capacity: "2 Adults + 2 Children",
    additionalInfo: "+ tax",
  },
  {
    id: 4,
    name: "Family Room 4",
    image: FamilyRoom4,
    description:
      "Family room where 2 adults and 2 children can stay comfortably",
    price: "₹3,000",
    capacity: "2 Adults + 2 Children",
    additionalInfo: "+ tax",
  },
  {
    id: 5,
    name: "Family Room 5",
    image: FamilyRoom5,
    description:
      "Family room where 2 adults and 2 children can stay comfortably",
    price: "₹3,000",
    capacity: "2 Adults + 2 Children",
    additionalInfo: "+ tax",
  },
  {
    id: 6,
    name: "Junior Room 6",
    image: JuniorRoom6,
    description:
      "Only two adults can stay in junior room with attached bathroom.",
    price: "₹1,800",
    capacity: "2 Adults",
    additionalInfo: "+ tax",
  },
];

const RoomsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <nav className="bg-white dark:bg-gray-800 shadow-sm p-4">
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold text-primary dark:text-primary/90"
        >
          <img src={Logo} alt="Sukham Resort Logo" className="h-8 w-auto" />
          Sukham × HaMy Resort
        </Link>
      </nav>

      <main className="pt-20">
        <div className="bg-primary dark:bg-primary/90 text-white py-16">
          <div className="max-w-6xl mx-auto px-4">
            <Link
              to="/"
              className="text-white/80 hover:text-white flex items-center"
            >
              <ArrowLeft className="mr-2" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-serif mt-4">Our Rooms</h1>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {rooms.map((room) => (
              <div
                key={room.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-colors duration-300"
              >
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-xl font-serif dark:text-white">
                      {room.name}
                    </h2>
                    <div className="text-right">
                      <span className="text-primary dark:text-primary/90 font-semibold">
                        {room.price}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 block">
                        {room.additionalInfo}
                      </span>
                      <span className="text-xs text-gray-400 dark:text-gray-500 block italic mt-1">
                        *Price may vary from time to time
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    {room.description}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {room.capacity}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto mt-16">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 md:p-12 border border-gray-100 dark:border-gray-700 relative overflow-hidden transition-colors duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/60 via-primary to-primary/60"></div>

              <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif text-center text-gray-800 dark:text-white mb-10">
                For fair price contact:
              </h3>

              <div className="space-y-8">
                <div className="flex flex-col items-center gap-6">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10">
                    <a
                      href="tel:9445842201"
                      className="flex items-center gap-3 text-xl md:text-2xl font-medium text-gray-700 hover:text-primary transition-all duration-300 group"
                    >
                      <span className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5 rounded-full group-hover:scale-110 transition-transform duration-300">
                        📞
                      </span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        9445842201
                      </span>
                    </a>
                    <a
                      href="tel:9047475131"
                      className="flex items-center gap-3 text-xl md:text-2xl font-medium text-gray-700 hover:text-primary transition-all duration-300 group"
                    >
                      <span className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5 rounded-full group-hover:scale-110 transition-transform duration-300">
                        📞
                      </span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        9047475131
                      </span>
                    </a>
                  </div>

                  <a
                    href="mailto:sukhamresort@gmail.com"
                    className="flex items-center gap-3 text-xl md:text-2xl font-medium text-gray-700 hover:text-primary transition-all duration-300 group"
                  >
                    <span className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5 rounded-full group-hover:scale-110 transition-transform duration-300">
                      ✉️
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      sukhamresort@gmail.com
                    </span>
                  </a>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-white px-4 text-sm text-gray-500">
                      Contact Us
                    </span>
                  </div>
                </div>

                <p className="text-center text-gray-600 max-w-md mx-auto">
                  Contact us directly for the best available rates and exclusive
                  special offers for your stay
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 dark:bg-black text-white py-8 mt-20">
        <div className="text-center">
          <p>
            © {new Date().getFullYear()} Sukham × HaMy Resort. All rights reserved.
          </p>
          <p className="text-sm text-gray-400">
            Created and Maintained by{" "}
            <a
              href="https://www.linkedin.com/in/aryan-soni-26794924a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary dark:text-primary/90 hover:text-primary/80 transition-colors font-medium"
            >
              Aryan Soni
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default RoomsPage;
