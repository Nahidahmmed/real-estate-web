import React from 'react'
import Banner from '../../Sections/Banner'
import Section1 from '../../Sections/Section1'
import Services from '../../Sections/Services'
import Rooms from '../../Sections/Rooms'
import Agents from '../../Sections/Agents'

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Section1></Section1>
      <h1 className='text-3xl text-center font-light mt-6 text-[#35A29F]'>Our Services</h1>
      <div className='mt-12 mb-14 font-light lg:mx-[250px] text-[#35A29F]'> <Services></Services></div>
      <Rooms></Rooms>
      <h1 className='text-3xl text-center font-light my-9  text-[#35A29F]'>Our Agents</h1>
      <Agents></Agents>
    </div>
  )
}
