import React from "react";
import { ReactComponent as Hello } from "../img/hello.svg";

export default function About() {
  return (
    <div className="flex flex-col px-8 lg:flex-row items-center">
      <h1 className="title mt-5 lg:hidden">About Me</h1>
      <div className="w-full ">
        <Hello className="w-full" />
      </div>
      <div className="w-full px-12 lg:pl-9">
        <h1 className="title lg:block hidden">About Me</h1>
        <h2 className="tracking-wide lg:text-2xl text-4xl sm:mt-9 lg:leading-9 text-head">
          {" "}
          I am a passionate Front-end developer with web-development experience
          using tools such as: React, Firebase, NextJs, TailwindCss, Bootstrap,
          and typescript to build responsive websites and web applications.
        </h2>
      </div>
    </div>
  );
}
