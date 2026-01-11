import React from 'react'
import type { IconType } from 'react-icons'

const InfoCard = ({ title, Icon, description }:{ title:string, Icon: IconType, description:string }) => {
  return (
    <div className="group relative  z-10  overflow-hidden flex flex-col items-center justify-center bg-white  rounded-xl shadow-md p-6 w-64 h-44 transition-shadow duration-300 ease-out hover:shadow-lg">
      
      {/* Main content */}
      <div className="relative flex flex-col items-center  ">
        <Icon className="text-primary text-4xl" />
        <h3 className="text-primary-text font-semibold text-center mt-2">
          {title}
        </h3>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 z-20 bg-primary flex items-center justify-center text-center px-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
        <p className="text-white text-sm font-medium">
          {description}
        </p>
      </div>
    </div>
  )
}

export default InfoCard