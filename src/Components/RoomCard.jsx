import React, { useState } from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';


export default function RoomCard({ room }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const bgImageStyle = {
    backgroundImage: `url(${room.image})`,
  };

  return (
    <Link to={`/detail/${room._id}`}>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative rounded-lg overflow-hidden transition-transform transform hover:scale-105"
        style={{
          transition: '0.4s ease',
        }}
      >
        <div className="w-full h-[260px] bg-cover bg-center pt-4 relative group" style={bgImageStyle}>
          <div
            className={`absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 transition-opacity ${isHovered ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <div
              className={`text-center ${isHovered ? 'scale-100 translate-y-0' : 'scale-0 translate-y-4'
                }`}
              style={{
                transition: '0.6s ease',
              }}
            >
              <button
                className="text-white text-xs bg-yellow-500 rounded-md w-[70px] h-[20px] ml-2"
                style={{
                  transition: '0.6s ease',
                }}
              >
                {room.for}
              </button>
              <h1 className="text-white text-3xl pt-3 pb-3 font-thin">
                ${room.price}
                <hr className="w-[100px] mx-auto" />
              </h1>

              <h1 className="text-white text-2xl font-thin">
                {room.type}
              </h1>
              <h1 className="text-white text italic font-thin">
                {room.location}
              </h1>

              <Rating
                className='mx-auto'
                style={{ maxWidth: 90, marginTop: 12 }}
                value={room.rating}
                readOnly
              />


            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}