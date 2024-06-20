import React from "react";

const ForegroundText = (children) => {
  const { parentText, childText } = children;
  return (
    <div className="mt-10">
      <div class=" flex items-center justify-center ">
        <div class="relative">
          {/* highlighted Text */}
          <h1 class="text-4xl  text-white relative z-10">{parentText}</h1>
          {/*Background Text */}
          <h1 class="text-8xl font-bold text-white opacity-10  top-0 left-0 transform -translate-y-3/4 translate-x-1/4">
            {childText}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ForegroundText;
