import React, { useState } from 'react'
import logo from '../assets/images/dianyLogoNew.png'
import avatar from '../assets/images/Avatar.webp'
import { HiHome, HiMagnifyingGlass, HiStar, HiTv, HiPlayCircle } from 'react-icons/hi2'
import { HiPlus, HiDotsVertical } from 'react-icons/hi'
import HeaderItem from './HeaderItem'


function Header() {
  const [toggle, setToggle] = useState(false)
  const menu = [
    {
      name: 'HOME',
      icon: HiHome
    },
    {
      name: 'SEARCH',
      icon: HiMagnifyingGlass
    },
    {
      name: 'WATCH LIST',
      icon: HiPlus
    },
    {
      name: 'ORIGINALS',
      icon: HiStar
    },
    {
      name: 'MOVIES',
      icon: HiPlayCircle
    },
    {
      name: 'SERIES',
      icon: HiTv
    }
  ]

  return (
    <div className='flex items-center  justify-between w-screen px-5'>
      <div className='flex gap-8 items-center' >
        <img src={logo} alt="logo image" className='w-[80px] md:w-[115px] object-cover' />
        <div className='hidden md:flex gap-8'>
          {menu.map(item => (
            <HeaderItem  name={item.name} Icon={item.icon} />
          ))}
        </div>

        <div className='flex md:hidden gap-5'>
          {menu.map((item, index) => index < 3 && (
            <HeaderItem name={""} Icon={item.icon} />
          ))}
          <div className='md:hidden' onClick={ ()=>{setToggle(!toggle)}}>
            <HeaderItem name={""} Icon={HiDotsVertical} />
            {toggle ? <div className='absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4'>
              {menu.map((item, index) => index > 2 && (
                <HeaderItem name={item.name} Icon={item.icon} />
              ))}
            </div> : null}
          </div>
        </div>

      </div>
      <img src={avatar} alt="profile image" className='w-[40px] md:w-[60px] rounded-full' />
    </div>
  )
}

export default Header