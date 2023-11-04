import React, { useEffect, useState } from 'react'
import { Rating } from '@smastrom/react-rating'
import { FaEnvelope, FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa6";
import '@smastrom/react-rating/style.css'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";


export default function Agents() {
  const [agents, setAgents] = useState([])

  useEffect(() => {
    fetch('https://real-estate-web-server.vercel.app/agents')
      .then(res => res.json())
      .then(data => setAgents(data))
  }, [])

  return (
    <div>
      <div className="lg:grid lg:grid-cols-4 lg:mx-[400px]">
        {agents.map(agent =>

          <div key={agent._id} className=' text-center mx-auto my-8'>

            <img className='w-[170px] mx-auto rounded-full' src={agent.Image} alt="" />
            <h1 className='text-xl mt-4 mb-4'>{agent.Name}</h1>
            <Rating
              className='mx-auto mb-9'
              style={{ maxWidth: 90, marginTop: 12 }}
              value={agent.Rating}
              readOnly
            />
            <div className='grid grid-cols-4 lg:gap-4 mx-[80px] lg:mx-auto '>
              <button className=' w-[40px] h-[40px] hover:bg-sky-600 hover:text-white border-sky-600 text-sky-600 border-[1px] px-3 text-lg  rounded-full'><FaFacebookF className='pr-1'></FaFacebookF> </button>
              <button className=' w-[40px] h-[40px hover:bg-sky-400 hover:text-white border-sky-400 text-sky-400 border-[1px] pl-3 text-lg rounded-full'><FaTwitter className='pr-1'></FaTwitter> </button>
              <button className=' w-[40px] h-[40px hover:bg-red-600 hover:text-white border-red-600 text-red-600 border-[1px] px-3 text-lg rounded-full'><FaGoogle className='pr-1'></FaGoogle></button>
              <button className=' w-[40px] h-[40px hover:bg-red-700 hover:text-white border-red-700 text-red-700 border-[1px] px-3 text-lg rounded-full'><FaEnvelope className='pr-1'></FaEnvelope></button>
            </div>
          </div>
        )}

      </div>
      <div className='my-10'>
        <h1 className='text-3xl text-center font-light my-9  text-[#35A29F]'>Testimonials</h1>
        <Swiper className="mySwiper">
          <SwiperSlide><div className='lg:flex lg:mx-[530px]'>
            <img className='w-[200px] mx-auto lg:mx-1 rounded-full border-2' src="https://i.ibb.co/J3wJChW/handsome-man-with-his-arms-crossed-white-background.jpg" alt="" />
            <div className='my-auto mx-5'>
              <p className='font-semibold text-gray-500 '>Nestled in a friendly neighborhood, this charming family home offers a cozy and inviting ambiance. The highlight is its generous backyard, providing ample space for outdoor activities, making it the perfect setting for family gatherings and relaxation. Inside, you'll find a comfortable layout designed for modern living, making this house the ideal place</p>
              <h1 className='font-semibold text-2xl my-2'>John Smith</h1>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide><div className=' lg:flex lg:mx-[530px]'>
            <img  className='w-[200px] mx-auto lg:mx-1 rounded-full border-2' src="https://i.ibb.co/8dgLRYH/front-view-happy-lawyer-with-smartphone.jpg" alt="" />
            <div className='my-auto mx-5'>
              <p className='font-semibold text-gray-500 '>"his spacious countryside home is a tranquil haven, surrounded by the beauty of nature. The property features a lush garden, perfect for growing your favorite plants or enjoying outdoor activities. Inside, a welcoming fireplace graces the living area, creating a cozy atmosphere for those cold winter nights. This home provides a wonderful blend of country living and modern comfort, making it an idyllic retreat</p>
              <h1 className='font-semibold  text-2xl my-2'>Jane Doe</h1>
            </div>
          </div></SwiperSlide>

        </Swiper>
      </div>
    </div>

  )
}
