import Image from "next/image";
import React from "react";
// import node from "https://i.ibb.co/NTNJM4Y/pngwing-com.png";
// import express from "https://i.ibb.co/mX1G0Fm/Expressjs.png";
// import mongo from "https://i.ibb.co/HqqF04V/pngegg.png";
// import react from "https://i.ibb.co/HXDFHGr/react.png";
// import js from "https://i.ibb.co/C7xsnPC/pngwing-com-3.png";
// import css from "https://i.ibb.co/yRy4V80/pngwing-com-2.png";
// import html from "https://i.ibb.co/CvtMFkx/pngwing-com-1.png";

const TechUsed = () => {
  return (
    <div>
      <h1 className="text-3xl text-center text-primary font-bold">
        Technology I Use
      </h1>
      <div className="bg-white m-10 p-10 rounded-lg container mx-auto grid grid-cols-1 justify-items-center lg:grid-cols-3 gap-5">
        <Image
          src="https://i.ibb.co/NTNJM4Y/pngwing-com.png"
          width={250}
          height={500}
          alt="tech"
        ></Image>
        <Image
          src="https://i.ibb.co/NKbFhqb/1-XP-m-ZOr-Iq-X7-Os-FIn-N2ng-RQ-removebg-preview-1.png"
          width={250}
          height={500}
          alt="tech"
        ></Image>
        <Image
          src="https://i.ibb.co/HqqF04V/pngegg.png"
          width={250}
          height={500}
          alt="tech"
        ></Image>
        <Image
          src="https://i.ibb.co/HXDFHGr/react.png"
          width={250}
          height={500}
          alt="tech"
        ></Image>
        <Image
          src="https://i.ibb.co/C7xsnPC/pngwing-com-3.png"
          width={250}
          height={500}
          alt="tech"
        ></Image>
        <Image
          src="https://i.ibb.co/yRy4V80/pngwing-com-2.png"
          width={250}
          height={500}
          alt="tech"
        ></Image>
        <Image
          src="https://i.ibb.co/CvtMFkx/pngwing-com-1.png"
          width={250}
          height={300}
          alt="tech"
        ></Image>
      </div>
    </div>
  );
};

export default TechUsed;
