"use client"
import Image from "next/image";
import WordCard from "./_components/WordCard";
import { useState } from "react";

export default function TextbookPage() {
  const [viewMode, setViewMode] = useState("grid"); // Default view is grid
  const [showSettings, setShowSettings] = useState(false);
  const wordData = [
    {
      word: "remark",
      pronunciation: "[rɪˈmɑːk]",
      type: "compound",
      definition: "To remark is to say something.",
      example:
        "The teacher remarked on how quickly the students were learning.",
      imageSrc: "/text.svg?height=300&width=300",
    },
    {
      word: "Home",
      pronunciation: "[ho;me]",
      type: "compound",
      definition: "To remark is to say something.",
      example:
        "The teacher remarked on how quickly the students were learning.",
      imageSrc: "/text.svg?height=300&width=300",
    },
    {
      word: "observe",
      pronunciation: "[əbˈzɜːv]",
      type: "verb",
      definition: "To observe is to watch carefully.",
      example: "The scientist observed the reaction closely.",
      imageSrc: "/text.svg?height=300&width=300",
    },
    {
      word: "observe",
      pronunciation: "[əbˈzɜːv]",
      type: "verb",
      definition: "To observe is to watch carefully.",
      example: "The scientist observed the reaction closely.",
      imageSrc: "/text.svg?height=300&width=300",
    },
    {
      word: "observe",
      pronunciation: "[əbˈzɜːv]",
      type: "verb",
      definition: "To observe is to watch carefully.",
      example: "The scientist observed the reaction closely.",
      imageSrc: "/text.svg?height=300&width=300",
    },
    {
      word: "observe",
      pronunciation: "[əbˈzɜːv]",
      type: "verb",
      definition: "To observe is to watch carefully.",
      example: "The scientist observed the reaction closely.",
      imageSrc: "/text.svg?height=300&width=300",
    },
    // Add more word data as needed
  ];
  return (
    <div className="min-h-screen bg-[#F6F5F4]">


      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-8">
        {/* Toggle Sections */}
        <div className="flex justify-between items-center ">
          <div className="flex gap-8 mb-8">
            <button className="flex items-center gap-2 text-gray-900 font-medium">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 19l9-5-9-5-9 5 9 5z" />
              </svg>
              Textbook
            </button>
            <button className="flex items-center gap-2 text-gray-400">
              <Image src="./book.svg" height={32} width={32} />
              Dictionary
            </button>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#F2D4DC] text-[#945069]">
              <img
                src="/placeholder.svg?height=24&width=24"
                alt="Sprint"
                className="w-6 h-6"
              />
              Sprint
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#C3DCE3] text-[#2B788B]">
              <img
                src="/placeholder.svg?height=24&width=24"
                alt="Audio-Call"
                className="w-6 h-6"
              />
              Audio-Call
            </button>
            <button   onClick={() => setShowSettings(!showSettings)} className="p-2 text-gray-400 hover:text-gray-600">
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
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </button>
          </div>
        </div>


        {/* Controls */}
        <div className="flex relative justify-between items-center text-center  mb-8">
          <div className="flex w-full  justify-center  gap-8">
            {[
              { level: "A1", difficulty: "Easy", active: true },
              { level: "A2", difficulty: "Easy", active: false },
              { level: "B1", difficulty: "Medium", active: true },
              { level: "B2", difficulty: "Medium", active: false },
            ].map(({ level, difficulty, active }) => (
              <button
                key={level}
                className={`px-4  py-2  rounded-lg ${
                  active
                    ? "border-b-2 border-[#2B788B] text-gray-900"
                    : "text-gray-500"
                }`}
              >
                {level}
                <span
                  className={`ml-2 text-xs px-2 py-0.5 rounded ${
                    difficulty === "Easy"
                      ? "bg-[#C3DCE3] text-[#2B788B]"
                      : "bg-[#F2D4DC] text-[#945069]"
                  }`}
                >
                  {difficulty}
                </span>
              </button>
            ))}
          </div>

           {/* Settings */}
        {showSettings && (
          <div className="bg-white absolute right-0 top-0.5 border shadow-lg rounded-xl p-4 mb-8">
            <label className="flex items-center gap-2 text-gray-600">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-gray-300"
                checked={viewMode === "list"}
                onChange={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
              />
              Show words in a list
            </label>
            <label className="flex items-center gap-2 text-gray-600 mt-2">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-gray-300"
                // Add logic for another setting if needed
              />
              Display the 'Add' and 'Remove' buttons
            </label>
          </div>
        )}
        </div>

     {/* Word Cards */}
     <div className={viewMode === "grid" ? "grid grid-cols-3 gap-6" : "space-y-4"}>
          {wordData.map((word) => (
            <WordCard key={word.word} {...word} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-8">
          <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-gray-400">
            ←
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-gray-600">
            1
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#2B788B] text-white">
            2
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-gray-600">
            3
          </button>
          <span className="px-2">...</span>
          <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-gray-600">
            27
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-gray-600">
            28
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-gray-600">
            29
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-gray-400">
            →
          </button>
        </div>
      </main>
    </div>
  );
}
