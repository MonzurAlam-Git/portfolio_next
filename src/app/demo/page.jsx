"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Demo = () => {
  return (
    <div>
      <div class="bg-gray-900 flex items-center justify-center min-h-screen">
        <Link href={"/"} className="btn btn-success m-10">
          Home
        </Link>
        <div class="relative">
          {/* highlighted Text */}
          <h1 class="text-5xl font-bold text-white relative z-10">
            Manzurul Alam
          </h1>
          {/*Background Text */}
          <h1 class="text-8xl font-bold text-white opacity-10 absolute top-0 left-0 transform -translate-y-2/4 translate-x-2/4">
            Manzur
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Demo;
