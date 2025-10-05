'use client'
import Link from "next/link"
import { useState } from "react"
import ListIcon from './.././../../public/assets/list.png'
import Image from "next/image"

function Navbar() {
  const [navMobile, setnavMobile] = useState(false);
  const Toggle = () => {
    setnavMobile(!navMobile);
  }

  const Menu = [
    { id: 1, name: "About", path: "/about" },
    { id: 2, name: "Products", path: "/products" },
    { id: 3, name: "Contact Us", path: "/contact" },
  ];

  return (
    <div className="flex items-center justify-between p-5 shadow-sm relative">
      <Link href={"/"} className='text-yellow-400'>Hexashop</Link>
      <div className='hidden md:flex justify-between items-center w-[60%]'>
        <ul className='md:flex gap-8'>
          {Menu.map((item, index) => (
            <Link href={item.path} key={index}>
              <li className='hover:text-yellow-400 cursor-pointer hover:scale-105 transition-all'>{item.name}</li>
            </Link>
          ))}
        </ul>
        <button className="bg-yellow-400 w-[75px] h-[50px] rounded-[10px] cursor-pointer">Logout</button>
      </div>
      <div onClick={Toggle} className="md:hidden">
        <Image src={ListIcon}
          height={20}
          width={20}
          alt="list icon"
          className="block cursor-pointer " />
    
      {
        navMobile && (
          <div className='absolute top-[45px] right-[10px] p-[30px]
           border-yellow-400 rounded-[5px] border-[1px] text-center flex flex-col gap-[20px]'>
            <p onClick={Toggle} className="absolute top-[10px] right-[10px]">X</p>
            <ul className='flex flex-col gap-[20px] mt-8'>
              {Menu.map((item, index) => (
                <Link href={item.path} key={index}>
                  <li className='hover:text-yellow-400 cursor-pointer hover:scale-105 transition-all'>{item.name}</li>
                </Link>
              ))}
            </ul>
            <button className="bg-yellow-400 w-[75px] h-[50px] rounded-[10px] hover:cursor-pointer">Logout</button>
          </div>
        )
      }  </div>
    </div>
  )
}

export default Navbar;
