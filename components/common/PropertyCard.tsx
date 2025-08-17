// components/PropertyCard.tsx
import React from "react";

interface PropertyCardProps {
  name: string;
  price: number;
  rating: number;
  image: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ name, price, rating, image }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform hover:scale-105">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-600">₦{price}</p>
        <p className="text-yellow-500">⭐ {rating}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
