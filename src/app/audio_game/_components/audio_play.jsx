'use client'

export default function AudioGameInterface() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      {/* Play Button */}
      <button 
        className="w-24 h-24 rounded-full border-2 border-[#2B788B] flex items-center justify-center mb-8 group hover:bg-[#2B788B] transition-colors"
      >
        <svg 
          className="w-10 h-10 text-[#2B788B] group-hover:text-white transition-colors" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
          />
        </svg>
      </button>

      {/* Hearts */}
      <div className="flex gap-2 mb-12">
        {[1, 2, 3, 4, 5].map((heart) => (
          <svg
            key={heart}
            className="w-6 h-6 text-[#945069]"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
          </svg>
        ))}
      </div>

      {/* Word Options */}
      <div className="grid grid-cols-1 gap-4 w-full max-w-5xl mb-8">
        <div className="flex flex-wrap justify-center gap-4">
          {[
            'prêt hypothécaire',
            'correct',
            'selon laquelle',
            'citer',
            'nourriture'
          ].map((word, index) => (
            <button
              key={index}
              className="px-6 py-3 border border-gray-200 rounded-full text-gray-600 hover:border-[#2B788B] hover:text-[#2B788B] transition-colors"
            >
              {word}
            </button>
          ))}
        </div>
      </div>

      {/* I don't know button */}
      <button className="px-6 py-3 bg-[#C3DCE3] text-[#2B788B] rounded-full hover:bg-[#2B788B] hover:text-white transition-colors">
        I don't know
      </button>
    </div>
  )
}

