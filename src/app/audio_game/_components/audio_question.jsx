"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function GameQuestion() {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    const handleKeyPress = (e) => {
      const num = parseInt(e.key);
      if (num >= 1 && num <= 5) {
        const options = [
          "prêt hypothécaire",
          "correct",
          "selon laquelle",
          "citer",
          "nourriture",
        ];
        setSelectedAnswer(options[num - 1]);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      {/* Word Card */}
      <div className="mb-8 relative w-full flex justify-center  text-center">
        <div className="w-40 h-40 rounded-full overflow-hidden mb-4 mx-auto">
          <Image
            src="/food.svg"
            alt="Food"
            height={132}
            width={132}
            className="w-full h-full object-cover"
          />
        </div>
      <div className="flex items-center gap-2 absolute bottom-6 border shadow-lg bg-white rounded-full py-2 px-2  text-center justify-center text-lg">
        <Image
          src="/music.svg"
          height={20}
          width={20}
          alt="Music Icon"
          style={{ color: "red" }} // For dynamic inline styling
          className="text-red-900" // Tailwind utilities applied to container
        />

        <span className="font-medium">food</span>
        <span className="text-gray-500">- nourriture</span>
      </div>
      </div>

      {/* Hearts */}
      <div className="flex gap-2 mb-12">
        {[1, 2, 3, 4, 5].map((heart) => (
          <svg
            key={heart}
            className={`w-6 h-6 ${
              heart <= 4 ? "text-[#945069]" : "text-[#F2D4DC]"
            }`}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        ))}
      </div>

      {/* Word Options */}
      <div className="grid grid-cols-1 gap-4 w-full max-w-5xl mb-8">
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { text: "prêt hypothécaire", status: "default" },
            { text: "correct", status: "default" },
            { text: "selon laquelle", status: "selected" },
            { text: "citer", status: "default" },
            { text: "nourriture", status: "correct" },
          ].map((option, index) => (
            <button
              key={index}
              className={`px-6 py-3 rounded-full transition-colors ${
                option.status === "selected"
                  ? "border-2 border-[#945069] text-[#945069]"
                  : option.status === "correct"
                  ? "border-2 border-[#2B788B] text-[#2B788B]"
                  : "border border-gray-200 text-gray-600 hover:border-[#2B788B] hover:text-[#2B788B]"
              }`}
              onClick={() => setSelectedAnswer(option.text)}
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>

      {/* Next Button */}
      <button className="px-8 py-3 bg-[#C3DCE3] text-[#2B788B] rounded-full hover:bg-[#2B788B] hover:text-white transition-colors">
        Next
      </button>

      {/* Keyboard Hint */}
      <div className="mt-8 text-sm text-gray-400">
        *You can also use{" "}
        <span className="px-2 py-1 bg-gray-100 rounded mx-1">1-5</span>
        keys on the keyboard
      </div>
    </div>
  );
}
