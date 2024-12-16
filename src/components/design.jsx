import Link from "next/link";
import React from "react";

const Design = () => {
  return (
    <div>
      
      <div className="relative cursor-pointer px-6 animate-slideRight overflow-hidden">
        <Link
          href="https://www.figma.com/design/rJBl5ymqF7RmUkAMo7iPOW/E-Learning-Platform-(Community)?node-id=441-4875&t=9ISnz5Qo6a70ON60-0"
          target="_blank"
          className="block text-gray-900 font-medium text-lg hover:text-[#945069] transform transition-all duration-300 whitespace-nowrap"
        >
          The Figma Design{" "}
          <span className="text-[#945069] hover:text-[#2B788B] cursor-pointer">
            https://www.figma.com/design/rJBl5ymqF7RmUkAMo7iPOW/E-Learning-Platform-(Community)?node-id=441-4875&t=9ISnz5Qo6a70ON60-0
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Design;
