import React from "react";
import { ReactComponent as Hello } from "../img/hello.svg";

export default function About() {
  return (
    <div className="flex items-center flex-col px-8 lg:flex-row">
      <h1 className="title mt-5 lg:hidden">About Me</h1>
      <div className="w-full ">
        <Hello className="w-full" />
      </div>
      <div className="w-full px-12 lg:pl-9">
        <h1 className="title lg:block hidden">About Me</h1>
        <h2 className="tracking-wide lg:text-xl text-4xl sm:mt-9 text-[#194b68]">
          {" "}
          I am a passionate Front-end developer with web-development experience
          using tools such as: React, Firebase, NextJs, TailwindCss, Bootstrap,
          and typescript to build responsive websites and web applications.
          I studied computer science in bowen university (2017-2021) and graduated with a 4.21 CGPA(second class upper division)
        </h2>
      </div>
    </div>
  );
}
