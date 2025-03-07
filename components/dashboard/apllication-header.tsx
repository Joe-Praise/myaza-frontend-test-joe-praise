'use client'
// import { useNavBarStore } from '@/store';
import { SearchIcon } from 'lucide-react'
import React from 'react'

interface IApplicationHeaderProps {
  label: string
  desc: string
}
const ApllicationHeader = (props: IApplicationHeaderProps) => {
  const { label, desc } = props
  // const { toggleSidebar } = useNavBarStore();
  return (
    <div className="flex justify-between md:items-center">
      {/* <MenuIcon
        className='md:hidden size-10 text-white me-3'
        onClick={toggleSidebar}
      /> */}
      <div className=" w-max">
        <h1 className="text-[24px] text-white font-space-grotesk font-semibold leading-[28.06px] mb-[11px]">
          {label}
        </h1>
        <p className="font-karla text-gray-100 -tracking-[4%] leading-[24px] my-0">
          {desc}
        </p>
      </div>

      <div className="bg-primary-100 h-[40px] md:flex justify-between items-center pe-[16px] max-w-[380px] w-full rounded-[8px] shadow hidden ">
        <input
          type="text"
          placeholder="Search for anything...."
          className="w-full h-full font-karla text-xs text-purple-100 leading-[14.03px] ps-[16px] border-none outline-none "
        />
        <SearchIcon />
      </div>
    </div>
  )
}

export default ApllicationHeader
