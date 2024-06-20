import React from "react";
import ForegroundText from "./ReUsable.jsx/ForegroundText";

const Services = () => {
  return (
    <>
      {/* Component: Feature items with icon, title, and text */}
      <div className="flex flex-col items-center gap-8 text-center mb-10">
        <ForegroundText
          parentText="Services I Provide"
          childText="Services"
        ></ForegroundText>
        {/* Service 1: Responsive Design */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center text-emerald-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
              aria-label="Dashboard icon"
              role="graphics-symbol"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
              />
            </svg>
          </div>
          <div className="flex w-full min-w-0 flex-col items-center justify-center gap-0 text-base">
            <h3 className="mb-4 text-lg leading-6 text-slate-700">
              Responsive Design
            </h3>
            <p className="text-slate-500">
              Ensure your web application looks and functions flawlessly on
              various devices, from smartphones to desktops.
            </p>
          </div>
        </div>

        {/* Service 2: Front-End Development */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center text-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
              aria-label="Code icon"
              role="graphics-symbol"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.75 15.5L8 12.25 4.75 9M19.25 15.5L16 12.25 19.25 9"
              />
            </svg>
          </div>
          <div className="flex w-full min-w-0 flex-col items-center justify-center gap-0 text-base">
            <h3 className="mb-4 text-lg leading-6 text-slate-700">
              Front-End Development
            </h3>
            <p className="text-slate-500">
              Build responsive and interactive user interfaces using HTML, CSS,
              JavaScript, and frameworks like React.
            </p>
          </div>
        </div>

        {/* Service 3: Performance Optimization */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center text-yellow-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
              aria-label="Speed icon"
              role="graphics-symbol"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5h7.5M8.25 9h7.5M8.25 13.5h7.5M8.25 18h7.5M5.25 4.5h.75v15h-.75z"
              />
            </svg>
          </div>
          <div className="flex w-full min-w-0 flex-col items-center justify-center gap-0 text-base">
            <h3 className="mb-4 text-lg leading-6 text-slate-700">
              Performance Optimization
            </h3>
            <p className="text-slate-500">
              Improve the performance of web applications to ensure fast load
              times and a smooth user experience.
            </p>
          </div>
        </div>

        {/* Service 4: Version Control */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center text-purple-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
              aria-label="Git icon"
              role="graphics-symbol"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 3v4.5h12V3m0 13.5V21H6v-4.5M3 10.5h18"
              />
            </svg>
          </div>
          <div className="flex w-full min-w-0 flex-col items-center justify-center gap-0 text-base">
            <h3 className="mb-4 text-lg leading-6 text-slate-700">
              Version Control
            </h3>
            <p className="text-slate-500">
              Use Git for version control, allowing for efficient collaboration
              and code management.
            </p>
          </div>
        </div>

        {/* Service 5: UI/UX Design */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center text-red-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
              aria-label="Design icon"
              role="graphics-symbol"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3v18h18V3H3zm4 2h10v10H7V5zm2 2v6h6V7H9zm-2 8h10v2H7v-2z"
              />
            </svg>
          </div>
          <div className="flex w-full min-w-0 flex-col items-center justify-center gap-0 text-base">
            <h3 className="mb-4 text-lg leading-6 text-slate-700">
              UI/UX Design
            </h3>
            <p className="text-slate-500">
              Create user-friendly interfaces and enhance user experiences with
              thoughtful design.
            </p>
          </div>
        </div>
      </div>
      {/* End Feature items with icon, title, and text */}
    </>
  );
};

export default Services;
