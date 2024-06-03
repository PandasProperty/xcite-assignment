'use client';

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';
import { usePathname } from 'next/navigation'

export default function Menu() {
  const [openMenu, setOpenMenu] = useState(false);
  const pathname = usePathname();
  const toggleMenu = () => setOpenMenu(!openMenu);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-20 bg-bunting-800 border-gray-200 drop-shadow-md">
        <div className="max-w-screen-xl relative flex flex-wrap items-center justify-between mx-auto px-4 py-2">
          <a href="https://www.yallabus.net/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-8 ml-4 md:ml-0 rtl:space-x-reverse pointer z-10">
            <Image
              src="/spree.png"
              width={200 / 2}
              height={89 / 2}
              alt="Yalla Bus"
            />
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden betterhover:bg-blue-700 betterhover:outline-none"
            aria-controls="navbar-default"
            onClick={toggleMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="3 5 22 18" className={`absolute w-6 h-6 transition-opacity ease-in-out duration-1000 ${openMenu ? "visible opacity-100" : "invisible opacity-0"}`}>
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18 18 6M6 6l12 12" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 17" className={`absolute w-6 h-6 transition-opacity ease-in-out duration-1000 ${openMenu ? "invisible opacity-0" : "visible opacity-100"}`}>
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
          <div className="hidden md:block w-full absolute" id="navbar-default">
            <ul className="flex items-center justify-center font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
              <li className={`border-b-2 border-b-transparent px-2 ${pathname === '/' ? 'border-b-gold-500' : ''}`}>
                <Link href="/" className={`block py-2 px-3 rounded md:p-0 hover:text-gold-500 text-xl ${pathname === '/' ? 'text-gold-500' : 'text-gold-600'}`}>Leaderboard</Link>
              </li>
              <li className={`border-b-2 border-b-transparent px-2 ${pathname !== '/' ? 'border-b-gold-500' : ''}`}>
                <Link href="/catalog" className={`block py-2 px-3 rounded md:p-0 hover:text-gold-500 text-xl ${pathname !== '/' ? 'text-gold-500' : 'text-gold-600'}`}>Catalog</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        id="dialog-right"
        className={`relative z-10 visible md:invisible`}
        aria-labelledby="slide-over"
        role="dialog"
        aria-modal="true"
        onClick={() => setOpenMenu(!openMenu)}
      >

      <div className={`${openMenu ? "absolute inset-0 overflow-hidden" : ''}`}>
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="pointer-events-none fixed max-w-full right-0 left-0 h-full"
          >
            <div
              className={
                `pointer-events-auto relative w-full h-full transform transition ease-in-out duration-500 ${
                  openMenu ? "translate-x-0" : "translate-x-full"
                }`
              }
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
              }}
            >
              <div
                className="flex flex-col h-full bg-white p-20 gap-4 items-center"
              >
                <Link href="/" onClick={toggleMenu} className="block py-2 px-3 md:p-0 text-bunting-900 hover:text-bunting-500 border-b-2 border-b-transparent hover:border-b-bunting-500 text-xl">Leaderboard</Link>
                <Link href="/catalog" onClick={toggleMenu} className="block py-2 px-3 md:p-0 text-bunting-900 hover:text-bunting-500 border-b-2 border-b-transparent hover:border-b-bunting-500 text-xl">Catalog</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}