export default function AudioResults() {
    return (
      <div className="min-h-screen bg-[#F6F5F4] flex items-center justify-center p-6">
        <div className="flex gap-6 w-full max-w-[1180px]">
          {/* Results Card */}
          <div className="bg-white rounded-[14px] p-8 flex-1 shadow-[0_22px_34px_rgba(0,0,0,0.05)]">
            <div className="flex gap-12">
              <div className="w-[240px]">
                <img
                  src="/results.svg?height=240&width=240"
                  alt="Books with graduation cap"
                  className="w-full h-auto"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-[32px] font-black mb-2">Your Audio</h2>
                <p className="text-[#757575] mb-8">You did pretty good!</p>
                
                <div className="flex gap-8 mb-12">
                  {/* Points Circle */}
                  <div className="relative w-[120px] h-[120px]">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                      <circle
                        className="stroke-[#2B788B] stroke-[4]"
                        cx="50"
                        cy="50"
                        r="48"
                        fill="none"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                      <div className="text-2xl font-bold">240</div>
                      <div className="text-sm text-[#757575]">points</div>
                    </div>
                  </div>
                  
                  {/* Words Circle */}
                  <div className="relative w-[120px] h-[120px]">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                      <circle
                        className="stroke-[#639B6D] stroke-[4]"
                        cx="50"
                        cy="50"
                        r="48"
                        fill="none"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                      <div className="text-xl font-bold">40/</div>
                      <div className="text-4xl font-bold">30</div>
                      <div className="text-sm text-[#757575]">words</div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
                <div className="flex justify-center  gap-4 font-bold">
                  <button className="flex items-center gap-2 px-6 py-3 text-gray-900  hover:text-[#2B788B] transition-colors">
                    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0v2.43l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z" clipRule="evenodd" />
                    </svg>
                    Play it again
                  </button>
                  <button className="px-6 py-3 bg-[#C3DCE3] text-[#2B788B] rounded-full hover:bg-[#2B788B] hover:text-white transition-colors">
                    Go to textbook
                  </button>
                </div>
          </div>
  
          {/* Words List Card */}
          <div className="bg-white rounded-[14px] p-8 flex-1 shadow-[0_22px_34px_rgba(0,0,0,0.05)]">
            <div className="grid grid-cols-2 gap-8">
              {/* Known Words */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <h3 className="text-2xl font-bold">I know</h3>
                  <span className="px-2 py-1 bg-[#C3DCE3] text-[#2B788B] rounded-md text-sm">
                    15 words
                  </span>
                </div>
                <div className="space-y-4">
                  {[
                    { word: 'lone', translation: 'solitaire' },
                    { word: 'anniversary', translation: 'anniversaire' },
                    { word: 'lone', translation: 'solitaire' },
                    { word: 'anniversary', translation: 'anniversaire' },
                    { word: 'lone', translation: 'solitaire' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#2B788B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                      </svg>
                      <span className="font-semibold">{item.word}</span>
                      <span className="text-[#757575]">- {item.translation}</span>
                    </div>
                  ))}
                </div>
              </div>
  
              {/* Unknown Words */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <h3 className="text-2xl font-semibold">I don't know</h3>
                  <span className="px-2 py-1 bg-[#F2D4DC] text-[#945069] rounded-md text-sm">
                    15 words
                  </span>
                </div>
                <div className="space-y-4 block justify-center text-center">
                  {[
                    { word: 'lone', translation: 'solitaire' },
                    { word: 'anniversary', translation: 'anniversaire' },
                    { word: 'lone', translation: 'solitaire' },
                    { word: 'anniversary', translation: 'anniversaire' },
                    { word: 'lone', translation: 'solitaire' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#945069]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                      </svg>
                      <span className="font-semibold">{item.word}</span>
                      <span className="text-[#757575]">- {item.translation}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  