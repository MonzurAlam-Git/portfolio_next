"use client";

import Link from "next/link";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

// recheck :
// 1. font need to change

const Hero = () => {
  return (
    <div>
      <div className="bg-base-200 p-32">
        <div className="">
          {/* flex
         flex-col lg:flex-row-reverse */}
          {/* <img
            src="https://i.ibb.co/wKjsyWz/photo-300x300-1.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
            alt="picture"
          /> */}
          <div>
            <h1 className="text-5xl font-bold">Hello There</h1>
            <h2 className="text-3xl my-3 ms-20">
              I
              <span className="text-secondary font-bold">
                <Typewriter
                  words={[
                    " am Mohammad Manzurul Alam",
                    " Love to design and code for Human-Interaction with Web System",
                    " an CSE Graduated",
                    " a Front End Developer",
                  ]}
                  loop={false}
                  className="text-red-400"
                  cursor
                  cursorStyle="_"
                  typeSpeed={50}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>
            <button className="btn btn-secondary">
              <Link href="https://drive.google.com/file/d/12PYDZF_o4BO-uXk77tsdB35sE0VfF0vb/view?usp=drive_link">
                Watch Resume
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
