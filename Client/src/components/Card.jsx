import React from 'react';

const Card = ({ data }) => {
  console.log('data in the card component', data);
  return (
    <div className="w-80 h-96 shadow-xl rounded-lg overflow-hidden relative">
      <div className="relative">
        {/* Image */}
        <img src={data.images[0]} alt={data.title} className="w-full h-72 object-cover" />

        {/* Discount Label */}
        <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          {data.discountPercentage}% OFF
        </div>
      </div>

      {/* Product Details */}
      <div className="items-center text-center mt-2">
        <h1 className="font-bold text-xl">{data.title}</h1>
      </div>
    </div>
  );
};

export default Card;
