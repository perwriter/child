export default function TeamMembers() {
    return (
      <div className="min-h-screen bg-[#F6F5F4] flex items-center justify-center p-6">
        <div className="w-full max-w-[926px] space-y-4">
          {/* Alex Card */}
          <div className="bg-white rounded-[14px] p-6 shadow-[0_22px_34px_rgba(0,0,0,0.05)]">
            <div className="flex items-center gap-6">
              <div className="w-[88px] h-[88px] rounded-full overflow-hidden bg-[#F5D048] flex-shrink-0">
                <img
                  src="/alex.svg?height=88&width=88"
                  alt="Alex avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h2 className="text-2xl font-black">Alex</h2>
                  <span className="px-2 py-1 bg-[#2B788B] text-white rounded text-sm">
                    github
                  </span>
                </div>
                <p className="text-[#757575]">
                  Made design, api queries, statistics, sprint game, did some layout and supervised development.
                </p>
              </div>
            </div>
          </div>
  
          {/* Gabriel Card */}
          <div className="bg-white rounded-[14px] p-6 shadow-[0_22px_34px_rgba(0,0,0,0.05)]">
            <div className="flex items-center gap-6">
              <div className="w-[88px] h-[88px] rounded-full overflow-hidden bg-[#2B788B] flex-shrink-0">
                <img
                  src="/gabu.svg?height=88&width=88"
                  alt="Gabriel avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h2 className="text-2xl font-black">Gabriel</h2>
                  <span className="px-2 py-1 bg-[#2B788B] text-white rounded text-sm">
                    github
                  </span>
                </div>
                <p className="text-[#757575]">
                  Authorization / registration module, Audio Challenge game, collection of statistics, routing, typing of the studied words.
                </p>
              </div>
            </div>
          </div>
  
          {/* Marcus Card */}
          <div className="bg-white rounded-[14px] p-6 shadow-[0_22px_34px_rgba(0,0,0,0.05)]">
            <div className="flex items-center gap-6">
              <div className="w-[88px] h-[88px] rounded-full overflow-hidden bg-[#2B788B] flex-shrink-0">
                <img
                  src="/marcus.svg?height=88&width=88"
                  alt="Marcus avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h2 className="text-2xl font-black">Marcus</h2>
                  <span className="px-2 py-1 bg-[#2B788B] text-white rounded text-sm">
                    github
                  </span>
                </div>
                <p className="text-[#757575]">
                  Made the application home page, e-textbook, layout, and adaptive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  