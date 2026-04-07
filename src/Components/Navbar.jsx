import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import Logo from './Logo';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/service' },
        { name: 'About', path: '/about' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="fixed w-full top-0 z-50 bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto  h-20 flex justify-between items-center">


                <Link to='/'>
                    <Logo />
                </Link>


                <div className="hidden md:flex items-center gap-10">
                    {menuItems.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            className={({ isActive }) =>
                                `text-[15px] font-medium transition-colors hover:text-blue-600 ${isActive ? 'text-blue-600' : 'text-gray-600'
                                }`
                            }
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </div>

                <div className="hidden md:block">
                    <Link
                        to="/contact"
                        className="bg-blue-600 text-white px-7 py-3 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-md active:scale-95"
                    >
                        Get Started
                    </Link>
                </div>


                <button
                    className="md:hidden text-3xl text-gray-800"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <HiX /> : <HiMenuAlt3 />}
                </button>
            </div>


            {isOpen && (
                <div className="absolute top-20 left-0 w-full bg-white border-b border-gray-200 shadow-xl py-8 px-6 flex flex-col gap-6 md:hidden animate-in fade-in slide-in-from-top-4 duration-300">
                    {menuItems.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            onClick={() => setIsOpen(false)}
                            className="text-lg font-semibold text-gray-800"
                        >
                            {item.name}
                        </NavLink>
                    ))}
                    <Link
                        to="/contact"
                        onClick={() => setIsOpen(false)}
                        className="bg-blue-600 text-white text-center py-4 rounded-2xl font-bold"
                    >
                        Get a Free Consultation
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;