import Image from "next/image";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const AboutMe = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <Image
          src="https://i.ibb.co/thXZfmg/Whats-App-Image-2024-06-05-at-17-39-52-493bef4c.jpg"
          alt="Descriptive alt text" // Provide meaningful alt text
          width={500} // Set the correct width
          height={300} // Set the correct height
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="ml-5">
          <h2 className="text-3xl my-3 ms-20 ">
            <span className="text-secondary font-bold ">
              <Typewriter
                words={[
                  "Assalamualikum",
                  "I am Md Manzurul Alam",
                  "I Love to design and code for Human-Interaction with Web System",
                  "Iam an CSE Graduated",
                  "Iam a Front End Developer",
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
          <p className="py-6 text-xl ">
            Hi! I am Manzurul Alam, a Front End Developer. I have always been
            fascinated by how designs collaborate with web interactivity to
            create a blissful user experience. My expertise lies in building
            robust and dynamic front-end applications, primarily using the MERN
            stack (React JS, Express JS, MongoDB, NodeJS) along with Vanilla JS
          </p>
          <a
            className="btn btn-secondary my-3"
            href="https://drive.google.com/uc?export=download&id=1kdOjqc5cFw2kk303CGYVgl6wxFvp7Omb"
          >
            Download Resume
          </a>{" "}
          <br />
          <a
            className="btn btn-secondary my-3"
            href="https://drive.google.com/file/d/1kdOjqc5cFw2kk303CGYVgl6wxFvp7Omb/view?usp=sharing"
          >
            Watch Resume
          </a>
          <br />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
