import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

//images
import desktopPic from '/TechRisePictures/IMG_20230405_143353.jpg';
import balancePic from '../../../public/TechRisePictures/IMG_20230420_143407.jpg';
import camPic from '../../../public/TechRisePictures/IMG_20230425_144350.jpg';
import sidePic1 from '../../../public/TechRisePictures/IMG_20230425_144354.jpg';
import rearPic from '../../../public/TechRisePictures/IMG_20230425_144357.jpg';
import sidePic2 from '../../../public/TechRisePictures/IMG_20230425_144412.jpg';
import angledPic from '../../../public/TechRisePictures/IMG_20230425_144420.jpg';

export default function Projects() {
  return (
    <main className="relative h-screen bg-gradient-to-b from-cyan-600 to-green-400 container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
    
    <h1 className="text-6xl font-bold text-white text-center">
        Projects
      </h1>
      <h4 className="text-white text-center mt-2">
        These are all of my projects!
      </h4>
      
    <br></br>
    
    <div className="flex flex-col items-center justify-center space-y-10">
  <div className="grid grid-cols-4 gap-1">
  <div className="relative h-60 w-full">
  <img src='/TechRisePictures/IMG_20230405_143353.jpg' className="object-cover h-full w-full" alt="Desktop" />
  </div>
  <div className="relative h-60 w-full">
    <Image src={balancePic} layout="fill" objectFit="contain" alt="Balance" />
  </div>
  <div className="relative h-60 w-full">
    <Image src={camPic} layout="fill" objectFit="contain" alt="Camera" />
  </div>
  <div className="relative h-60 w-full">
    <Image src={sidePic1} layout="fill" objectFit="contain" alt="Side 1" />
  </div>
  <div className="relative h-60 w-full">
    <Image src={rearPic} layout="fill" objectFit="contain" alt="Rear" />
  </div>
  <div className="relative h-60 w-full">
    <Image src={sidePic2} layout="fill" objectFit="contain" alt="Side 2" />
  </div>
  <div className="relative h-60 w-full">
    <Image src={angledPic} layout="fill" objectFit="contain" alt="Angled" />
  </div>
</div>
</div>

    <h2 className="text-6xl font-bold text-white text-center">
        <Link href="https://github.com/Fredswqa190/STAR4Files"
        className='text-white text-center mt-2'>
          NASA TechRise
        </Link>
      </h2>
      <h4 className="text-white text-center mt-2">
        This is a project I was worked on for NASA&apos;s TechRise Challenge program. I worked with a team of 18 other students to build a CubeSat that was launched into the stratosphere!
      </h4>
    </main>
  )
}
