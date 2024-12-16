import Image from 'next/image';

export default function AudioCall() {
  return (
    <div className="min-h-screen bg-[#F6F5F4] flex items-center justify-center p-6">
      <div className="bg-white rounded-[24px] p-12 shadow-[0_22px_34px_rgba(0,0,0,0.05)] max-w-[926px] w-full flex gap-12">
        {/* Left Section */}
        <div className="w-[349px] relative">
          {/* Musical Notes */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-full">
            <div className="relative w-full h-32">
              {[
                { transform: '-translate-x-20 -translate-y-6', delay: 'animate-bounce' },
                { transform: 'translate-x-20 -translate-y-2', delay: 'animate-bounce delay-75' },
                { transform: '-translate-y-10', delay: 'animate-bounce delay-150' },
              ].map((note, index) => (
                <div
                  key={index}
                  className={`absolute top-16 ${note.transform} ${note.delay}`}
                >
                  <Image
                    src="/music.svg" // Correct path to the music icon
                    height={40}
                    width={40}
                    alt={`Music icon ${index + 1}`}
                    className="text-[#2B788B]"
                  />
                  
                  
                </div>
              ))}
            </div>
          </div>

          {/* Audio Illustration */}
          <Image
            src="/audio.svg" // Correct path to the audio illustration
            alt="Person listening to music"
            width={349}
            height={349}
            className="w-full h-auto"
          />

          {/* Shadow Effect */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200px] h-[20px] bg-gradient-to-t from-black/5 to-transparent rounded-full blur-md" />
        </div>

        {/* Right Section */}
        <div className="flex-1 pt-4">
          {/* Title and Badge */}
          <div className="flex items-center gap-3 mb-6">
            <h1 className="text-[32px] font-black tracking-tight">Audio-Call</h1>
            <span className="px-3 py-1 bg-[#E6F0F3] text-[#2B788B] rounded-[40px] text-sm">
              audition task
            </span>
          </div>

          {/* Description */}
          <p className="text-[#757575] text-lg mb-12 max-w-[400px]">
            The Audio-Call training develops vocabulary and improves listening comprehension.
          </p>

          {/* Level Selection */}
          <div className="space-y-4">
            <div className="text-[#757575]">Choose a level:</div>
            <div className="flex gap-4">
              {[
                { level: 'A1', color: '#639B6D' },
                { level: 'A2', color: '#C4A24C' },
                { level: 'B1', color: '#CB5B43' },
                { level: 'B2', color: '#CB5B43' },
                { level: 'C1', color: '#A95151' },
                { level: 'C2', color: '#2B788B' },
              ].map(({ level, color }) => (
                <button
                  key={level}
                  className="w-[44px] h-[44px] rounded-full border-2 flex items-center justify-center text-sm hover:bg-gray-50 transition-colors"
                  style={{ borderColor: color, color: color }}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          {/* Start Button */}
          <button className="mt-12 px-8 py-3 bg-[#2B788B] text-white rounded-[100px] hover:bg-[#2B788B]/90 transition-colors">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
}
