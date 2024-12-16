'use client'

export default function GameInterface() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      <div className="relative w-[400px] aspect-square">
        {/* Circular Progress */}
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle
            className="stroke-[#F2F3F5]"
            cx="50"
            cy="50"
            r="48"
            fill="none"
            strokeWidth="4"
          />
          <circle
            className="stroke-[#2B788B]"
            cx="50"
            cy="50"
            r="48"
            fill="none"
            strokeWidth="4"
            strokeDasharray="301.59"
            strokeDashoffset="225"
          />
        </svg>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
          {/* Score */}
          <div className="flex gap-8 mb-4">
            <div>
              <div className="text-3xl font-bold">×2</div>
              <div className="text-sm text-gray-500">multiplier</div>
            </div>
            <div>
              <div className="text-3xl font-bold">30</div>
              <div className="text-sm text-gray-500">points</div>
            </div>
          </div>

          {/* Progress Dots */}
          <div className="flex gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#2B788B]"></div>
            <div className="w-2 h-2 rounded-full bg-[#C3DCE3]"></div>
            <div className="w-2 h-2 rounded-full bg-[#C3DCE3]"></div>
          </div>

          {/* Words */}
          <div className="space-y-2 mb-8">
            <div className="text-4xl font-bold">negative</div>
            <div className="text-3xl text-[#2B788B]">perdre</div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="px-6 py-2 bg-[#C3DCE3] text-[#2B788B] rounded-full hover:bg-[#2B788B] hover:text-white transition-colors">
              Right
            </button>
            <button className="px-6 py-2 bg-[#F2D4DC] text-[#945069] rounded-full hover:bg-[#945069] hover:text-white transition-colors">
              Wrong
            </button>
          </div>
        </div>
      </div>

      {/* Keyboard Help */}
      <div className="mt-8 text-sm text-gray-400">
        *You can also use the{' '}
        <span className="px-2 py-1 bg-gray-100 rounded">←</span>
        <span className="px-2 py-1 bg-gray-100 rounded mx-1">→</span>
        keys on the keyboard
      </div>
    </div>
  )
}

