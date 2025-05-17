import React from "react";
import { X, Phone, Car, Camera, Flame, Utensils } from "lucide-react";

interface PromoPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const PromoPopup = ({ isOpen, onClose }: PromoPopupProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-lg w-full relative animate-[slideIn_0.3s_ease-out]">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6">
          <div className="bg-primary/10 rounded-lg p-4 mb-4">
            <h2 className="text-2xl font-serif text-primary text-center mb-2">
              Sukham × HaMy Resort, Kotagiri
            </h2>
            <div className="text-gray-700 space-y-2">
              <p className="font-semibold">Available Accommodations:</p>
              <ul className="list-disc list-inside ml-2">
                <li>Family Rooms</li>
                <li>Junior Rooms</li>
                <li>Shared Dormitory (10 people)</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-4">
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="flex items-center gap-2 text-gray-700">
                <div className="text-primary">
                  <Flame className="w-4 h-4" />
                </div>
                <span className="text-sm">Bonfire(Paid)</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <div className="text-primary">
                  <Car className="w-4 h-4" />
                </div>
                <span className="text-sm">Free Parking</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <div className="text-primary">
                  <Camera className="w-4 h-4" />
                </div>
                <span className="text-sm">CCTV Surveillance</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <div className="text-primary">
                  <Utensils className="w-4 h-4" />
                </div>
                <span className="text-sm">Food Available(Paid)</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded p-4 text-center mb-4">
              <p className="text-gray-700 mb-2">24x7 Hot Water Available</p>
              <p className="text-gray-700 text-sm">
                Food Options: In-house | Pack Your Own | Zomato
              </p>
            </div>

            <div className="text-center space-y-2">
              <p className="font-semibold text-gray-800">Book Now:</p>
              <div className="flex items-center justify-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <a
                  href="tel:9445842201"
                  className="text-primary hover:underline"
                >
                  9445842201
                </a>
                <span className="text-gray-400">|</span>
                <a
                  href="tel:9047475131"
                  className="text-primary hover:underline"
                >
                  9047475131
                </a>
              </div>
              <p className="text-sm text-gray-600">Call or WhatsApp</p>
            </div>

            <button
              onClick={onClose}
              className="w-full bg-primary text-white py-3 rounded-lg mt-4 hover:bg-primary/90 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoPopup;
