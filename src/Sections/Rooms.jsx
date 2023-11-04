import React, { useEffect, useState } from 'react'
import RoomCard from '../Components/RoomCard'
export default function Rooms() {
    const [rooms, setRooms] = useState([]);
    console.log(rooms)
    useEffect(() => {
        fetch('https://real-estate-web-server.vercel.app/rooms')
            .then(res => res.json())
            .then(data => setRooms(data))
           
    }, []);
    return (
        <div className='my-20'>
            <h1 className='text-3xl text-center font-light mt-6 mb-9'>Recently Listed Properties</h1>
            <div className='lg:grid lg:grid-cols-4 lg:mx-[160px] gap-6'>
                {
                    rooms.map(room => <RoomCard key={room._id} room={room}></RoomCard>)
                }
            </div>
        </div>
    )
}
