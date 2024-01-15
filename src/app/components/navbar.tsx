'use client'
import { useState } from 'react';
import Link from 'next/link'

export default function Navbar() { 
    const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };   
    return (
        <><nav className="sticky flex items-center justify-between flex-wrap bg-gradient-to-r from-green-400 to-blue-500 p-6 h-20 shadow-2xl">
            <a href="/" className="p-2 mr-4 inline-flex items-center text-white hover:text-white">
                <svg className="w-10 h-10 mr-2" viewBox="0 0 24 24">
                    <path
                        fill="currentColor"
                    >
                    </path>
                </svg>
                <span className="text-xl font-bold uppercase tracking-wide">
                    Fred&apos;s Site!
                </span>
            </a>
            <div
                className="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto"
                id="navigation"
            >
                <div
                    className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto"
                >
                    <a
                        href="/"
                        className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white "
                    >
                        Home
                    </a>
                    <a
                        href="https://linktr.ee/Fredswqa1"
                        className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white "
                    >
                        Linktree
                    </a>
                    <a
                        href="https://github.com/Fredswqa190/Fredswqa190.github.io/blob/main/resume.pdf?raw=true"
                        className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white "
                    >
                        Resume
                    </a>
                    <a
                        href="https://cultists.network/"
                        className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white "
                    >
                        Blog: cultists.network
                    </a>
                    <a
                        href="/projects"
                        className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white "
                    >
                        Projects
                    </a>
                    <a
                        href="/research"
                        className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white "
                    >
                        Research
                    </a>
                    <a
                        href="/about"
                        className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white "
                    >
                        About Me
                    </a>
                    <a
                        href="/contact"
                        className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white "
                    >
                        Contact
                    </a>
                </div>
            </div>
            <button
                onClick={toggleDropdown}
                className="text-white inline-flex p-3 hover:bg-green-600 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
            >
                <i className="material-icons">Menu</i>
            </button>
        </nav>
        
        <div
    className={`${
      isOpen ? 'block' : 'hidden'
    } top-navbar w-full lg:hidden lg:inline-flex lg:flex-grow lg:w-auto flex justify-end items-center z-[999999] absolute right-0`}
    id="navigation"
  >
                <div className="z-[99999] bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                        <li>
                            <Link href="/"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Home
                            </Link>
                        </li>
                        <li>
                            <Link href="https://linktr.ee/Fredswqa1"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Linktree
                            </Link>
                        </li>
                        <li>
                            <Link href="https://github.com/Fredswqa190/Fredswqa190.github.io/blob/main/resume.pdf?raw=true"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Resume
                            </Link>
                        </li>
                        <li>
                            <Link href="https://cultists.network/"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Blog: cultists.network
                            </Link>
                        </li>
                        <li>
                            <Link href="/projects"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Projects
                            </Link>
                        </li>
                        <li>
                            <Link href="/research"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Research
                            </Link>
                        </li>
                        <li>
                            <Link href="/about"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">About Me
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div></>        
    )
}