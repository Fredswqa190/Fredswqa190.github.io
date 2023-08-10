import Image from 'next/image';
import planePic from '../../public/757.png';

export default function Home() {
  return (
    <div className="container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
    <head>
      <title>Fred&apos;s Site!</title>
    </head>
    <body className="h-screen bg-gradient-to-b from-cyan-600 to-green-400">
    <nav className="sticky flex items-center justify-between flex-wrap bg-gradient-to-r from-green-400 to-blue-500 p-6 h-20 shadow-2xl">
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
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="text-white inline-flex p-3 hover:bg-green-600 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
        data-target="#navigation"
      >
        <i className="material-icons">Menu</i>
        <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
        <li>
        <a href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Home</a>
      </li>
      <li>
        <a href="https://linktr.ee/Fredswqa1" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Linktree</a>
      </li>
      <li>
        <a href="https://github.com/Fredswqa190/Fredswqa190.github.io/blob/main/resume.pdf?raw=true" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Resume</a>
      </li>
      <li>
        <a href="https://cultists.network/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Blog</a>
      </li>
      <li>
        <a href="/projects" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Projects</a>
      </li>
      <li>
        <a href="/research" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Research</a>
      </li>
      <li>
        <a href="/about" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">About Me</a>
      </li>
      <li>
        <a href="/contact" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Contact</a>
      </li>
        </ul>
        </div>
      </button>
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
    </nav>

    <div className="flex items-center justify-center relative">
    <div className="w-full h-full overflow-hidden relative" style={{ height: '30vh' }}>
    <Image layout="fill" objectFit="cover" fill={true} src={planePic} alt=""/>
    </div>
    <div className="absolute bottom-0 px-4 py-3 bg-gray-500/50 w-full">
      <h1 className="text-6xl font-bold text-white text-center">
        Welcome to my GitHub Pages site!
      </h1>
      <p className="text-white text-center mt-2">
        This is a work in progress, so please be patient!
      </p>
    </div>
    </div>
    
    </body>
    </div>
  )
}