import React from 'react'
import {FaSearch} from "react-icons/fa"
import{Link} from 'react-router-dom'

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-sm'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
           <h1 className='font-bold text-sm sm:text-xl md:text-2xl '>
            <span className='text-slate-500'>Juts</span>
            <span className='text-slate-700 text-4xl'>Estate</span>
          </h1>
          <form action="" className='bg-slate-100 p-3 rounded-lg flex items-center'>
            <input type="text" name="" id="" placeholder='Search...' className='bg-transparent outline-none w-24 sm:w-48 '/>
            <FaSearch className='text-slate-500'/>
          </form>
          <ul className='flex gap-4'>
            <Link to='/'>
            <li className='hidden sm:inline hover:underline cursor-pointer'>Home</li>
            </Link>
            <Link to='/about'>
            <li className='hidden sm:inline hover:underline cursor-pointer'>About</li>
            </Link>
            <Link to='/sign-in'>
            <li className='hover:underline cursor-pointer'>Sign In</li>
            </Link>
          </ul>
      </div>
      </header>
  )
}
