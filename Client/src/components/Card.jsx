import React from 'react';

const Card = ({ data }) => {
  return (
    <div className="w-80  shadow-xl rounded-lg overflow-hidden relative">
      <div className="relative">
        <img src={data.images[0]} alt={data.title} className="w-full h-72 object-cover" />
        <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
          {data.discountPercentage}% OFF
        </div>
      </div>
      <div className="items-center text-center mt-2 mb-3">
        <h1 className="font-bold text-xl">{data.title}</h1>
        <p className='text-gray-600 text-lg'>{data.category}</p>
        <h2 className='font-semibold text-gray-900 text-lg'>Price :${data.price}</h2>
        <p>Rating :{data.rating}/5</p>
        <button className='bg-green-600 text-white w-2/3 h-10 rounded-lg'>Add To Cart</button>
      </div>
    </div>
  );
};

export default Card;
