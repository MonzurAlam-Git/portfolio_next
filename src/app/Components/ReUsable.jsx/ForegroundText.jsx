const ForegroundText = ({ parentText, childText }) => {
  return (
    <div className="mt-10 sm:max-w-screen mx-auto">
      <div className="flex items-center justify-center">
        <div className="relative">
          {/* Highlighted Text */}
          <h1 className="text-2xl sm:text-4xl text-white relative z-10">
            {parentText}
          </h1>
          {/* Background Text */}
          <h1 className="text-4xl sm:text-12xl font-bold text-white opacity-10 absolute top-3 left-5 transform -translate-y-3/4 translate-x-1/4">
            {childText}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ForegroundText;
