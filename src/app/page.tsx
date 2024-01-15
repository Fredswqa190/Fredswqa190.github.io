'use client'
import Image from 'next/image';
import planePic from '../../public/757.png';
import Head from 'next/head';


export default function Home() {
  return (
    <>
    <Head>
      <title>Fred&apos;s Site!</title>
    </Head>
    <main className="relative h-screen bg-gradient-to-b from-cyan-600 to-green-400 container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
  <div className="w-full h-full overflow-hidden relative" style={{ height: '50vh' }}>
    <div className="z-0">
      <Image layout="fill" objectFit="cover" fill={true} src={planePic} alt=""/>
    </div>
    <div className="absolute bottom-0 px-4 py-3 bg-gray-500/50 w-full">
      <h1 className="text-6xl font-bold text-white text-center">
        Welcome to my GitHub Pages site!
      </h1>
      <h4 className="text-white text-center mt-2">
        This is a work in progress, so please be patient!
      </h4>
    </div>
  </div>
</main>
    </>
  )
}