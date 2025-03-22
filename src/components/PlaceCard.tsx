import React from "react";

interface PlaceCardProps {
  place: {
    name: string;
    image: string;
    description: string;
  };
  onClick: () => void;
}

const PlaceCard = ({ place, onClick }: PlaceCardProps) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105 h-[400px] flex flex-col"
      onClick={onClick}
    >
      <img
        src={place.image}
        alt={place.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-serif mb-3 text-gray-800">{place.name}</h3>
        <p className="text-gray-600 line-clamp-4 flex-grow">
          {place.description}
        </p>
        <button className="mt-4 text-primary hover:text-primary/80 text-sm font-medium">
          Learn More →
        </button>
      </div>
    </div>
  );
};

export default PlaceCard;
