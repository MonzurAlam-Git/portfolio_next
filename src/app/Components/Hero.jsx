// "use client";

// import { Typewriter } from "react-simple-typewriter";

// // recheck :
// // 1. font need to change

// const Hero = () => {
//   return (
//     <div>
//       <div className="bg-base-200">
//         <div className="grid grid-row p-8">
//           <div>
//             <h1 className="text-5xl font-bold">Hello There</h1>
//             <h2 className="text-3xl my-3 ms-20 ">
//               <span className="text-secondary font-bold ">
//                 <Typewriter
//                   words={[
//                     "Assalamualikum",
//                     "I am Md Manzurul Alam",
//                     "I Love to design and code for Human-Interaction with Web System",
//                     "I am an CSE Graduated",
//                     "I am a Front End Developer",
//                   ]}
//                   loop={false}
//                   className="text-red-400"
//                   cursor
//                   cursorStyle="_"
//                   typeSpeed={50}
//                   deleteSpeed={50}
//                   delaySpeed={1000}
//                 />
//               </span>
//             </h2>
//             <a
//               className="btn btn-secondary my-3"
//               href="https://drive.google.com/uc?export=download&id=1ehWxlWpYHQncJu-Aecn5mwrx0RpEwmBM
// "
//             >
//               Download Resume
//             </a>{" "}
//             <br />
//             <a
//               className="btn btn-secondary my-3"
//               href="https://drive.google.com/file/d/1ehWxlWpYHQncJu-Aecn5mwrx0RpEwmBM/view?usp=sharing "
//             >
//               Watch Resume
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

"use client";

import { Typewriter } from "react-simple-typewriter";

// recheck :
// 1. font need to change

const Hero = () => {
  return (
    <div>
      <div className="bg-base-200">
        <div className="grid grid-row p-8">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold">Hello There</h1>
            <h2 className="text-xl md:text-3xl my-3 ms-0 md:ms-20">
              <span className="text-secondary font-bold">
                <Typewriter
                  words={[
                    "Assalamualikum",
                    "I am Md Manzurul Alam",
                    "I Love to design and code for Human-Interaction with Web System",
                    "I am an CSE Graduated",
                    "I am a Front End Developer",
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
              href="https://drive.google.com/uc?export=download&id=1FUPuhcuI3BxPrBRmTn4tyq2p77tbnfPo"
              target="_blank"
            >
              Download Resume
            </a>
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
