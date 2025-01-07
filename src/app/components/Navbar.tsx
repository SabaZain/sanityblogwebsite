import React from 'react'
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='bg-neutral-950 text-white flex justify-around p-3'>
        <div>
      <h1 className='text-2xl text-start font-bold text-orange-800'>Blog Website</h1>
      </div>
      <div>
      <ul className='flex justify-center align items-center gap-6'>
        <li className='font-semibold text-xl'><Link href="/">Home</Link></li>
        <li className='font-semibold text-xl'><Link href="/About">About</Link></li>
        <li className='font-semibold text-xl'><Link href="/Blogs">Blogs</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;
