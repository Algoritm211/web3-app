import React, {useState} from 'react';
import {HiMenuAlt4} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'
import logo from '../../../images/logo.png'
import {NavbarItem} from "./NavbarItem";

const NAVBAR_ITEMS = ['Market', 'Exchange', 'Tutorials', 'Wallets']

const Navbar: React.FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const navbarBody = NAVBAR_ITEMS.map((item, index) => {
    return (
      <NavbarItem
        key={item + index}
        title={item}
        classProps=''
     />
    )
  })

  const mobileNavbarBody = NAVBAR_ITEMS.map((item, index) => {
    return (
      <NavbarItem title={item} classProps='my-2' />
    )
  })
  return (
    <nav className='w-full flex md:justify-center justify-between
    items-center p-4'>
      <div className='md:flex flex-1 flex-initial justify-center items-center'>
        <img src={logo} className='w-32 cursor-pointer' alt='main_logo' />
      </div>
      <ul className='text-white md:flex hidden list-none
       flex-row justify-between items-center'>
        {navbarBody}
        <li className='bg-blue-500 py-2 px-7 mx-4
        rounded-full cursor-pointer hover:bg-blue-600'>
          Login
        </li>
      </ul>
      <div className='flex relative'>
        {isOpenMenu ? (
          <AiOutlineClose
            fontSize={28}
            className='text-white cursor-pointer md:hidden'
            onClick={() => setIsOpenMenu(false)}
          />
        ) : (
          <HiMenuAlt4
            fontSize={28}
            className='text-white cursor-pointer md:hidden'
            onClick={() => setIsOpenMenu(true)}
          />
        )}
        {isOpenMenu && (
          <ul className='z-10 fixed top-0 -right-2 p-3 text-white
          w-72 h-screen shadow-2xl md:hidden flex flex-col
          justify-start items-end rounded-md blue-glassmorphism animate-slide-in'>
            <li className='text-xl w-full my-2'>
              <AiOutlineClose
                fontSize={28}
                className='text-white cursor-pointer md:hidden'
                onClick={() => setIsOpenMenu(false)}
              />
            </li>
            {mobileNavbarBody}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
