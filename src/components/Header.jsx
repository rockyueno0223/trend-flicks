import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Transition } from '@headlessui/react';
import { SunIcon, MoonIcon, XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid';
import SearchBar from './SearchBar';

const Header = ({isDayMode, setIsDayMode, onSearch, fetchTrendMovies, fetchTrendTvShows, setSearchInput}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDayNightMode = () => {
    setIsDayMode(!isDayMode);
  };

  const handleLinkClick = () => {
    fetchTrendMovies()
    fetchTrendTvShows()
    setSearchInput(null)
  };

  return (
    <header className="w-full bg-[#555555] text-white px-4 py-3 fixed top-0 left-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Mobile: Hamburger & Logo */}
        <div className="flex items-center justify-between w-full lg:w-auto">
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white focus:outline-none"
          >
            <Bars3Icon className="w-6 h-6" />
          </button>
          <div className="lg:hidden w-full flex justify-center">
            <Link to="/" onClick={handleLinkClick}>
              <img src="/logo.png" alt="Trend Flicks" className='block'/>
            </Link>
          </div>
        </div>

        {/* Desktop: Logo, Links, Search, Mode Button */}
        <div className="hidden lg:flex justify-between items-center w-full">
          <div className="text-xl font-bold">
            <Link to="/" onClick={handleLinkClick}>
            <img src="/logo.png" alt="Trend Flicks" className='block'/></Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/about" className="text-white hover:text-gray-300">About</Link>
            <SearchBar onSearch={onSearch} fullWidth />
            <button
              onClick={toggleDayNightMode}
              className="p-2 rounded hover:bg-gray-600 focus:outline-none"
              style={{ backgroundColor: isDayMode ? '#666666' : '#444444', color: isDayMode ? '#fff' : '#fff' }}
            >
              {isDayMode ? (
                <SunIcon className="w-6 h-6 text-yellow-400" />
              ) : (
                <MoonIcon className="w-6 h-6 text-gray-400" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile: Sliding Menu */}
      <Transition
        show={isOpen}
        enter="transition-transform duration-300"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition-transform duration-300"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <div className="lg:hidden fixed inset-0 bg-[#444444] bg-opacity-75 z-40">
          <div className="relative w-80 bg-[#555555] h-full p-4">
            <button
              onClick={toggleMenu}
              className="absolute top-2 right-2 text-white focus:outline-none"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
            <div className="flex justify-center mt-4">
              <span className="text-xl font-bold">
                <Link to="/" onClick={handleLinkClick}>Logo</Link>
              </span>
            </div>
            <nav className="mt-8 space-y-4">
              <div className="block py-2">
                <Link to="/about" className="text-white hover:text-gray-300">About</Link>
              </div>
              <SearchBar onSearch={onSearch} />
              <button
                onClick={toggleDayNightMode}
                className="p-2 rounded hover:bg-gray-500 focus:outline-none w-full h-[38px] flex justify-center"
                style={{ backgroundColor: isDayMode ? '#666666' : '#444444', color: isDayMode ? '#fff' : '#fff' }}
              >
                {isDayMode ? (
                  <SunIcon className="w-6 h-6 text-yellow-400" />
                ) : (
                  <MoonIcon className="w-6 h-6 text-gray-400" />
                )}
              </button>
            </nav>
          </div>
        </div>
      </Transition>
    </header>
  );
};

export default Header;
