import React from "react";
import { ReactComponent as Hello } from "../img/hello.svg";

export default function About() {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/2">
        <Hello className="w-full" />
      </div>
      <div className="w-full md:w-1/2 pl-9">
        <h1 className="title">
          About Me
        </h1>
        <h2 className="tracking-wide text-xl leading-9 text-head">
          {" "}
          I am a passionate Front-end developer with web-development experience
          using tools such as: React, Firebase, NextJs, TailwindCss, Bootstrap,
          and typescript to build responsive websites and web applications.
        </h2>
      </div>
    </div>
  );
}
