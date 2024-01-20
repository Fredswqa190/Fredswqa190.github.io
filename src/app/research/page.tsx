import React from 'react'
import Link from 'next/link'

export default function Research() {
  return (
    <main className="relative h-screen bg-gradient-to-b from-cyan-600 to-green-400 container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
    <h1 className="text-7xl font-bold text-white text-center">
      My Research
    </h1>
    

    <h2 className="text-4xl font-bold text-white text-center">
        <Link href="https://ieeexplore.ieee.org/document/10349977"
        className='text-white text-center mt-2'>
          Implementation of Server-Based Intrusion Detection Software Framework in Bluetooth Networks
        </Link>
      </h2>
    <h3 className="text-2xl">
      Abstract:
    </h3>
    <p>
    Bluetooth is a well-known, convenient wireless connection protocol for low-energy devices. As a protocol, it provides convenient connections between devices that are compatible with the protocol. Unfortunately, Bluetooth is subject to a variety of different attacks. With this in mind, we have created a software framework for hardware integrity servers that are able to verify devices in terms of the device’s security implementations. It is hypothesized that if a trusted device integrity server is implemented in high-security or enterprise networks, then the network will be less vulnerable overall without a major impact on network traffic latency. Our server implementation relies on the Python programming language and primarily utilizes the LogCat Android function to inform the server of connecting devices, the Bleakscanner and BluePy libraries to scan for devices, and the PyShark library to monitor and detect potential intrusions. We concluded that the hardware server with the implemented software framework can inform clients of the type and nature of new connecting or existing devices. Additionally, the hardware server was capable of identifying truly benign devices with significant accuracy, however, it had difficulty with other device natures, particularly ones with complex manipulation.
    </p>

    <h2 className="text-4xl font-bold text-white text-center">
        <Link href="https://github.com/Fredswqa190/Fredswqa190.github.io/blob/main/Effects_of_Overclocking_on_the_Performance_of_Graphics_Processing_Units_in_AI_Based_Image_Classification.pdf?raw=true"
        className='text-white text-center mt-2'>
          Effects of Overclocking on the Performance of Graphics Processing Units in AI-Based Image Classification
        </Link>
    </h2>

    <h3 className="text-2xl">
      Abstract:
    </h3>
    <p>
      Machine learning (ML), more specifically deep learning has been on a consistent rise over the last two decades. An aspect of ML that has recently seen significant performance improvements lies in image classification. Although highly helpful for the world as it is capable of providing near real-time responses with high accuracy, image classification back-end software is often highly power intensive due to its reliance on graphics processors to process the images and do the true classification in a series of convolutions. With this in mind, we attempted to test the performance of graphics processors when overclocked or undervolted to test the impact these modifications will have on the accuracy and inference time using the ResNet50 image classification framework. It is hypothesized that overclocking will improve the inference time of image classification with similar accuracy to the baseline at the cost of higher instantaneous power consumption whereas the undervolted processors will cause increased inference time, with similar accuracy, but with significantly lower instantaneous power consumption. This project was conducted on Windows 11 with WSL 2 using the TensorFlow machine learning library with Nvidia graphics processors utilizing CUDA to improve the processing speeds of this process using graphics hardware. It was concluded that overall, the performance deltas between overclocked, undervolted, and stock processors were within a margin of error. All trials on the RTX 3080 resulted in an average power draw of approximately 85 W, a total time average of approximately 350 seconds per training run, and an accuracy of approximately 85\% regardless of the training conditions the tested Nvidia RTX 3080 graphics processor was under. When overclocked, the RTX 3080 had a best-case training speed increase of 8.3\% over undervolted execution. The RTX 3060 trails resulted in average power draws of approximately 50 W with total time averages of approximately 330 seconds per training run with similar accuracy to the RTX 3080. When overclocked, the RTX 3060 had a best-case single epoch training speed increase of 50\% over the nominal performance of 46 seconds compared to 21 seconds. 

    </p>
    </main>
  )
}
