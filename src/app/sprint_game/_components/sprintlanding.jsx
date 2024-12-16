import Image from "next/image";

export default function SprintGame() {
    return (
      <div className="min-h-screen bg-[#F6F5F4] flex flex-col items-center justify-center p-6">
        <div className="bg-white rounded-[24px] p-12 shadow-[0_22px_34px_rgba(0,0,0,0.05)] max-w-[926px] w-full flex gap-12">
          <div className="w-[349px] relative">
            <Image
              src="/sprint.svg?height=400&width=349"
              alt="Person running"
              height={400}
              width={349}
              className="w-full h-auto"
            />
            {/* Shadow effect */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200px] h-[20px] bg-gradient-to-t from-black/5 to-transparent rounded-full blur-md" />
          </div>
          
          <div className="flex-1 pt-4">
            <div className="flex items-center gap-3 mb-6">
              <h1 className="text-[32px] font-black tracking-tight">Sprint</h1>
              <span className="px-3 py-1 bg-[#E6F0F3] text-[#2B788B] rounded-[40px] text-sm">
                speed task
              </span>
            </div>
            
            <p className="text-[#757575] text-lg mb-12 max-w-[400px]">
              Trains the skill of fast translation. You have to choose if the translation corresponds to the suggested word.
            </p>
            
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
            
            <button className="mt-12 px-8 py-3 bg-[#2B788B] text-white rounded-[100px] hover:bg-[#2B788B]/90 transition-colors">
              Get started
            </button>
          </div>
        </div>
      </div>
    )
  }
  
  