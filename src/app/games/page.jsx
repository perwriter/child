import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Games = () => {
  return (
    <div className='min-h-screen bg-[#F6F5F4]'> <section className="px-6 max-w-6xl mx-auto pt-16">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <div className="text-[#2B788B] text-sm tracking-wider uppercase">
          E-COURSE PLATFORM
        </div>
        <h1 className="text-5xl font-black leading-tight tracking-tight">
          Learning and
          <br />
          teaching online,
          <br />
          made easy.
        </h1>
        <p className="text-gray-600 max-w-md">
          Practice your English and learn new things with the platform.
        </p>
        <div className='space-x-4'>
        <Link href="./sprint_game">
        <button className="bg-[#C3DCE3] text-[#2B788B] px-8 py-3 rounded-full hover:bg-[#2B788B] hover:text-white transition-colors">
        Play Sprint games
        </button>
        </Link>
        <Link href="./audio_game">
        <button className="bg-[#C3DCE3] text-[#2B788B] px-8 py-3 rounded-full hover:bg-[#2B788B] hover:text-white transition-colors">
          Play Audio games
        </button>
        </Link>
        </div>
        <div className="flex items-center gap-12 pt-8">
          <div className="flex items-center gap-2">
            <div className="text-[#2B788B]">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <div>
              <div className="text-2xl font-bold">700+</div>
              <div className="text-sm text-gray-500">hours of Content</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-[#2B788B]">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <div>
              <div className="text-2xl font-bold">575+</div>
              <div className="text-sm text-gray-500">Global Users</div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <Image
          src="./game.svg?height=600&width=600"
          alt="Student reading"
          height={400}
          width={400}
          className="w-full h-auto"
        />
      </div>
    </div>
  </section></div>
  )
}

export default Games