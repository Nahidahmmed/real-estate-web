import React, { useContext, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom';
import { FaLocationDot, FaMoon, FaVectorSquare, FaHouse, FaPinterestP, FaGoogle, FaTwitter, FaFacebookF, FaCar, FaLeaf, FaShieldHalved, FaWifi, FaPhoneFlip, FaStarOfLife, FaSun, FaArrowsUpDown, FaTv } from "react-icons/fa6";
import { FaTint, FaFireAlt } from "react-icons/fa";
import { Rating } from '@smastrom/react-rating'
import GoogleMapReact from 'google-map-react';
import { AuthContext } from '../../Providers/AuthProvider';
export default function Details() {
    const AnyReactComponent = ({ text }) => <div>{text}</div>;
    const defaultProps = {
        center: {
            lat: 23.792532153202163,
            lng: 90.37422674646767
        },
        zoom: 11
    };
    const { user } = useContext(AuthContext);
    const room = useLoaderData();
    const [showModal, setShowModal] = useState(false);

    const handleModalClose = () => {
        setShowModal(false);
    };
    return (
        <div>
            {/* navbar for detail page */}
            <div className="navbar h-[70px] fixed z-10 bg-base-100">
                <div className="flex-1">
                    <Link to="/">
                        <FaHouse className=' text-white bg-[#35A29F] w-[70px] h-[70px] p-4 lg:ml-2'></FaHouse>
                    </Link>
                </div>
                <div className="lg:navbar-center hidden lg:mr-[30%] lg:flex">
                    <ul className="menu menu-horizontal font-light text-base px-1">
                        <li>
                            {" "}
                            <Link className="hover:bg-transparent hover:text-[#35A29F]" to="/">Home</Link>{" "}
                        </li>

                        <li>
                            {" "}
                            <Link className="hover:bg-transparent hover:text-[#35A29F]" to="/about">About Us</Link>{" "}
                        </li>
                    </ul>
                </div>
                <div className="flex-none lg:gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="lg:input input-bordered w-24 md:w-auto" />
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user?.photoURL} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* content */}
            <div className='lg:flex'>
                <div className='lg:w-[90px] w-[1px] bg-[#001C30]'>
                    dashboard
                </div>
                {/* map */}
                <div className='lg:w-[50%] w-full pt-[70px]'>
                    <div className='lg:fixed w-[100%] lg:w-[47.7%] h-full'>
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: "" }}
                            defaultCenter={defaultProps.center}
                            defaultZoom={defaultProps.zoom}
                        >
                            <AnyReactComponent
                                lat={59.955414}
                                lng={30.337844}
                                text="My Marker"
                            />
                        </GoogleMapReact>
                    </div>
                </div>
                <div className='lg:w-[50%]'>
                    <img className='w-full lg:h-[510px]' src={room.image} alt="" />
                    <div className='lg:flex'>
                        {/* info */}
                        <div className='mt-5 pl-4'>
                            <h1 className='text-3xl font-light'>{room.type}</h1>
                            <div className='flex pt-3 items-center'>
                                <FaLocationDot className='text-base'></FaLocationDot>
                                <h1 className='pl-1'>{room.location}</h1>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <Rating

                                    style={{ maxWidth: 90, marginTop: 12 }}
                                    value={room.rating}
                                    readOnly
                                />
                                <h1 className='text-xs'>(146)</h1>
                            </div>
                            <div className='lg:flex gap-1 mt-4'>
                                <div className='lg:w-[200px] w-[260px] rounded text-[#35A29F] border-2 text-center'>
                                    <FaMoon className='mx-auto text-4xl mt-4' />
                                    <h1 className='mb-4 text-lg mt-2'>Bedrooms: {room.bedrooms}</h1>
                                </div>
                                <div className='lg:w-[200px] w-[260px] rounded text-[#35A29F] border-2 text-center'>
                                    <FaTint className='mx-auto text-4xl mt-4' />
                                    <h1 className='mb-4 text-lg mt-2'>Bathrooms: {room.bathrooms}</h1>
                                </div>
                                <div className='lg:w-[200px] w-[260px] rounded text-[#35A29F] border-2 text-center'>
                                    <FaVectorSquare className='mx-auto text-4xl mt-4' />
                                    <h1 className='mb-4 text-lg mt-2'>Sq Ft: {room.square_feet}</h1>
                                </div>
                            </div>
                        </div>
                        {/* manager */}
                        <div className='mx-auto'>
                            <div className='text-center lg:mx-auto my-8'>
                                <img className='w-[130px] lg:mx-[1px] ml-24 lg:ml-2 rounded-full border-4' src={room.manager_Image} alt="" />
                                <h1 className='text-xl mr-14 lg:mr-0 mt-2 mb-2'>{room.manager_name}</h1>
                                <Link><button onClick={() => setShowModal(true)} className=' lg:w-full w-60 mr-14 lg:mr-0 bg-[#35A29F] p-2 rounded-full text-white'> Contact Agent</button></Link>

                                {/* modal */}
                                <div
                                    className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${showModal ? '' : 'hidden'
                                        }`}
                                >
                                    <div className="bg-white p-8 rounded-lg shadow-md">
                                        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                                        <form>
                                            <div className="mb-4">

                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value="name"

                                                    className="w-full border rounded px-3 py-2"
                                                    required
                                                />
                                            </div>
                                            <div className="mb-4">

                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value="email"

                                                    className="w-full border rounded px-3 py-2"
                                                    required
                                                />
                                            </div>
                                            <div className="mb-4">

                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    value="message"

                                                    className="w-full border rounded px-3 py-2"
                                                    required
                                                />
                                            </div>
                                            <div className="text-right ">
                                                <button onClick={handleModalClose} type="submit" className="bg-[#35A29F] mr-[200px] text-white px-4 py-2 rounded">close</button>
                                                <button type="submit" className="bg-[#35A29F] text-white px-4 py-2 rounded">send</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-gray-100 pt-4 pl-4'>
                        {/* dicription */}
                        <div>
                            <h1 className='font-semibold'>Dicription:</h1>
                            <p className='font-extralight text-sm mt-2'>{room.description}</p>
                        </div>
                        {/* social */}
                        <div className='grid grid-cols-2 lg:grid-cols-4 lg:mx-0 mr-[80px] py-5'>
                            <button className='mr-[55px] w-[120px]  flex items-center hover:bg-sky-600 hover:text-white border-sky-600 text-sky-600 border-[1px] p-1 pl-4  rounded-full'><FaFacebookF className='pr-1'></FaFacebookF> Facebook</button>
                            <button className='mr-[55px] w-[120px] flex items-center hover:bg-sky-400 hover:text-white border-sky-400 text-sky-400 border-[1px] p-1 pl-6 rounded-full'><FaTwitter className='pr-1'></FaTwitter> Twitter</button>
                            <button className='mr-[55px] w-[120px] flex items-center hover:bg-red-600 hover:text-white border-red-600 text-red-600 border-[1px] mt-3 lg:mt-0 p-1 pl-5 rounded-full'><FaGoogle className='pr-1'></FaGoogle> Google+</button>
                            <button className='mr-[55px] w-[120px] flex items-center hover:bg-red-700 hover:text-white border-red-700 text-red-700 border-[1px] mt-3 lg:mt-0 p-1 pl-4 rounded-full'><FaPinterestP className='pr-1'></FaPinterestP> Pinterest</button>
                        </div>
                        {/* amenities */}
                        <div>
                            <div>
                                <h2 className='font-semibold mb-3'>Amenities :</h2>
                                <div className="grid grid-cols-4">
                                    <button
                                        className={`mr-4 mb-2 text-xs flex items-center font-semibold ${room.amenities.Garage ? 'text-[#46d6d1] ' : ' text-gray-400'} px-2 py-1 rounded`}
                                        disabled={!room.amenities.Garage}
                                    >
                                        <FaCar></FaCar> Garage
                                    </button>
                                    <button
                                        className={`lg:mr-4 mb-2 text-xs flex items-center font-semibold ${room.amenities.Outdoor_Pool ? 'text-[#46d6d1] ' : ' text-gray-400'} px-2 py-1 rounded`}
                                        disabled={!room.amenities.Outdoor_Pool}
                                    >
                                        <FaTint></FaTint> Outdoor Pool
                                    </button>
                                    <button
                                        className={`mr-4 mb-2 text-xs flex items-center font-semibold ${room.amenities.Garden ? 'text-[#46d6d1] ' : ' text-gray-400'} px-2 py-1 rounded`}
                                        disabled={!room.amenities.Garden}
                                    >
                                        <FaLeaf></FaLeaf> Garden
                                    </button>
                                    <button
                                        className={`mr-4 mb-2 text-xs flex items-center font-semibold ${room.amenities.Security_System ? 'text-[#46d6d1] ' : ' text-gray-400'} px-2 py-1 rounded`}
                                        disabled={!room.amenities.Security_System}
                                    >
                                        <FaShieldHalved></FaShieldHalved> Security System
                                    </button>
                                    <button
                                        className={`mr-4 mb-2 text-xs flex items-center font-semibold ${room.amenities.Internet ? 'text-[#46d6d1] ' : ' text-gray-400'} px-2 py-1 rounded`}
                                        disabled={!room.amenities.Internet}
                                    >
                                        <FaWifi></FaWifi> Internet
                                    </button>
                                    <button
                                        className={`mr-4 mb-2 text-xs flex items-center font-semibold ${room.amenities.Telephone ? 'text-[#46d6d1] ' : ' text-gray-400'} px-2 py-1 rounded`}
                                        disabled={!room.amenities.Telephone}
                                    >
                                        <FaPhoneFlip></FaPhoneFlip> Telephone
                                    </button>
                                    <button
                                        className={`mr-4 mb-2 text-xs flex items-center font-semibold ${room.amenities.Air_Conditioning ? 'text-[#46d6d1] ' : ' text-gray-400'} px-2 py-1 rounded`}
                                        disabled={!room.amenities.Air_Conditioning}
                                    >
                                        <FaStarOfLife></FaStarOfLife> Air Conditioning
                                    </button>
                                    <button
                                        className={`mr-4 mb-2 text-xs flex items-center font-semibold ${room.amenities.Heating ? 'text-[#46d6d1] ' : ' text-gray-400'} px-2 py-1 rounded`}
                                        disabled={!room.amenities.Heating}
                                    >
                                        <FaSun></FaSun> Heating
                                    </button>
                                    <button
                                        className={`mr-4 mb-2 text-xs flex items-center font-semibold ${room.amenities.Fireplace ? 'text-[#46d6d1] ' : ' text-gray-400'} px-2 py-1 rounded`}
                                        disabled={!room.amenities.Fireplace}
                                    >
                                        <FaFireAlt></FaFireAlt> Fireplace
                                    </button>
                                    <button
                                        className={`mr-4 mb-2 text-xs flex items-center font-semibold ${room.amenities.Balcony ? 'text-[#46d6d1] ' : ' text-gray-400'} px-2 py-1 rounded`}
                                        disabled={!room.amenities.Balcony}
                                    >
                                        <FaArrowsUpDown></FaArrowsUpDown> Balcony
                                    </button>
                                    <button
                                        className={`mr-4 mb-2 text-xs flex items-center font-semibold ${room.amenities.TV_Cable ? 'text-[#46d6d1] ' : ' text-gray-400'} px-2 py-1 rounded`}
                                        disabled={!room.amenities.TV_Cable}
                                    >
                                        <FaTv></FaTv> TV Cable
                                    </button>
                                </div>
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">Comments</h2>
                                <div className="space-y-4">
                                    {room.comments.map((comment, index) => (
                                        <div key={index} className="border p-4 rounded-lg bg-white shadow-md">
                                            <div className="flex items-center mb-2">
                                                <div className="w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center">
                                                    <img
                                                        src={`https://i.ibb.co/wJT5XZb/blank-profile-picture-973460-960-720.webp`}
                                                        alt={`${comment.user}'s Avatar`}
                                                        className="w-9 h-9 rounded-full"
                                                    />
                                                </div>
                                                <div className="ml-3">
                                                    <h3 className="text-lg font-semibold">{comment.user}</h3>
                                                </div>
                                            </div>
                                            <p className="text-gray-700 pl-[50px]">{comment.comment}</p>
                                        </div>
                                    ))}
                                    <div className=' pb-5 px-2'>
                                        <h1 className='font-semibold text-xl my-4'>Write Your Comment:</h1>
                                        <form className='flex'>
                                            <div className="w-10 rounded-full mr-5">
                                                <img className='rounded-full' src={user?.photoURL} />
                                            </div>
                                            <input
                                                name='comment'
                                                placeholder="Your comment"
                                                required
                                                className='className="bg-gray-100 border-2 border-gray-300 rounded-lg py-2 px-4 w-[85%] focus:outline-none focus:border-sky-500 transition duration-300 hover:border-sky-400"' type="text" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
