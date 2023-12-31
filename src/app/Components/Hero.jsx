"use client";

import Link from "next/link";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

// recheck :
// 1. font need to change

const Hero = () => {
  return (
    <div>
      <div className="bg-base-200">
        <div className="grid grid-row p-8">
          <div>
            <h1 className="text-5xl font-bold">Hello There</h1>
            <h2 className="text-3xl my-3 ms-20 ">
              <span className="text-secondary font-bold ">
                <Typewriter
                  words={[
                    "Assalamualikum",
                    "I am Md Manzurul Alam",
                    "I Love to design and code for Human-Interaction with Web System",
                    "I'm an CSE Graduated",
                    "I'm a Front End Developer",
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
            <a
              className="btn btn-secondary my-3"
              href="https://drive.google.com/uc?export=download&id=1DxxhZTD3EuxK5TUD1zRUmWWxd28YDIpf"
            >
              Download Resume
            </a>{" "}
            <br />
            <a
              className="btn btn-secondary my-3"
              href="https://drive.google.com/file/d/1DxxhZTD3EuxK5TUD1zRUmWWxd28YDIpf/view?usp=drive_link"
            >
              Watch Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
