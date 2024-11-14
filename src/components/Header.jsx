import React from 'react'
import MenuItem from './MenuItem'
import {AiFillHome} from 'react-icons/ai'
import {BsFillInfoCircleFill} from 'react-icons/bs'
import Link from 'next/link'

const Header = () => {
  return (

        <div className='flex justify-between p-3 item-center max-w-6xl mx-auto'> 
            <div className='flex gap-4 my-auto'>
                <MenuItem title="home" address="/" Icon={AiFillHome}/>
                <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill}/>
            </div>
            <Link href={"/"} >
            <div className='flex gap-1 items-center'>
            <span className='
                text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg'>IMDB</span>
                <span className='text-xl hidden sm:inline'>clone</span>
            </div>
                
            </Link>
        </div>

  )
}

export default Header