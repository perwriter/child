import React from 'react';

export default function WordCard({ word, pronunciation, type, definition, example, imageSrc }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="flex">
        <img src={imageSrc} alt="Word illustration" className="w-72 h-72 object-cover" />
        <div className="flex-1 p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-2xl font-bold mb-1">{word}</h2>
              <div className='flex gap-2 justify-center items-center'>
                <p className="text-gray-500 mb-2 mr-2">{pronunciation}</p>
                <span className="px-2 py-0.5 bg-[#F98B8B] text-white rounded">{type}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>124</span>
              <span>4</span>
              <span>0</span>
            </div>
          </div>
          <p className="text-gray-600 mb-4">{definition}</p>
          <p className="text-gray-600 mb-6">{example}</p>
          <div className="flex gap-4">
            <button className="px-4 py-2 bg-[#639B6D] text-white rounded-full hover:bg-[#4F7D57]">
              Add to learned
            </button>
            <button className="px-4 py-2 bg-[#F98B8B] text-white rounded-full hover:bg-[#E77979]">
              Remove from dictionary
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
