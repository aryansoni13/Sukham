import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Useful Links */}
          <div>
            <h3 className="text-white font-serif text-xl mb-4">Useful Links</h3>
            <ul className="space-y-2">
              {["Home", "About Us", "Rooms", "Career", "Contact Us"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(" ", "-")}`}
                      className="hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Activities */}
          <div>
            <h3 className="text-white font-serif text-xl mb-4">Activities</h3>
            <ul className="space-y-2">
              {["Bonfire", "Trekking", "Site Seeing", "Swimming"].map(
                (activity) => (
                  <li key={activity}>
                    <a
                      href={`#${activity.toLowerCase().replace(" ", "-")}`}
                      className="hover:text-primary transition-colors"
                    >
                      {activity}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-serif text-xl mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <p>
                  1/350C, Irupukal, Opposite Pandian Park, Kotagiri, Nilgiri
                  District, 643217
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a
                  href="tel:9445842201"
                  className="hover:text-primary transition-colors"
                >
                  94458 42201
                </a>
                <span className="text-gray-400">|</span>
                <a
                  href="tel:9047475131"
                  className="hover:text-primary transition-colors"
                >
                  90474 75131
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a
                  href="mailto:sukhamresort@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  sukhamresort@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Brand and Social Media */}
          <div>
            <h3 className="text-white font-serif text-2xl mb-4">
              Sukham × HaMy Resort RESORT
            </h3>
            <p className="text-gray-400 mb-6">
              Experience luxury and tranquility in the heart of Nilgiri
              District.
            </p>

            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=100092368247336"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/sukhamresort/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com/SukhamResort"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCI35BqLxYR60Sb63Tm-Ur_w"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright and Credits */}
        <div className="border-t border-gray-800 pt-8 text-center space-y-2">
          <p>
            &copy; {new Date().getFullYear()} Sukham × HaMy Resort. All rights
            reserved.
          </p>
          <p className="text-sm text-gray-400">
            Created and Maintained by{" "}
            <a
              href="https://www.linkedin.com/in/aryan-soni-26794924a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors font-medium"
            >
              Aryan Soni
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
