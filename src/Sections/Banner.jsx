import React from 'react'
import banner1 from '../assets/banner/banner1.jpg'
import banner2 from '../assets/banner/banner2.jpg'
import banner3 from '../assets/banner/banner3.jpg'
import banner4 from '../assets/banner/banner4.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
export default function Banner() {
    return (
        <Swiper className="mySwiper"  autoplay={{ delay: 2000 }}>
            <SwiperSlide><div className="hero h-[600px]" style={{ backgroundImage: `url(${banner2})` }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold">NOW IT'S EASY TO FIND YOUR FUTURE HOME</h1>
                        <p className="mb-5">WITH REALES - REAL ESTATE WEB APLICATION WILL HELP YOU FIND YOUR NEW HOME</p>
                        <button className="btn border-none hover:bg-[#328b89] bg-[#35A29F] text-white font-bold">Get Started</button>
                    </div>
                </div>
            </div></SwiperSlide>
            <SwiperSlide><div className="hero h-[600px]" style={{ backgroundImage: `url(${banner1})` }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold">NOW IT'S EASY TO FIND YOUR FUTURE HOME</h1>
                        <p className="mb-5">WITH REALES - REAL ESTATE WEB APLICATION WILL HELP YOU FIND YOUR NEW HOME</p>
                        <button className="btn border-none hover:bg-[#328b89] bg-[#35A29F] text-white font-bold">Get Started</button>
                    </div>
                </div>
            </div></SwiperSlide>
            <SwiperSlide><div className="hero h-[600px]" style={{ backgroundImage: `url(${banner3})` }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold">NOW IT'S EASY TO FIND YOUR FUTURE HOME</h1>
                        <p className="mb-5">WITH REALES - REAL ESTATE WEB APLICATION WILL HELP YOU FIND YOUR NEW HOME</p>
                        <button className="btn border-none hover:bg-[#328b89] bg-[#35A29F] text-white font-bold">Get Started</button>
                    </div>
                </div>
            </div></SwiperSlide>
            <SwiperSlide><div className="hero h-[600px]" style={{ backgroundImage: `url(${banner4})` }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold">NOW IT'S EASY TO FIND YOUR FUTURE HOME</h1>
                        <p className="mb-5">WITH REALES - REAL ESTATE WEB APLICATION WILL HELP YOU FIND YOUR NEW HOME</p>
                        <button className="btn border-none hover:bg-[#328b89] bg-[#35A29F] text-white font-bold">Get Started</button>
                    </div>
                </div>
            </div></SwiperSlide>

        </Swiper>

    )
}
