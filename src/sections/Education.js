import React from "react";
import { Icon } from "@iconify/react";

const Education = () => {
  return (
    <div className="bg-gradient-to-b from-[#1190EF] to-[#00BBFA]   text-light px-20">
    <div className="relative">
      <Icon icon="noto:graduation-cap" className="absolute"/>
      <h1>Education</h1></div>
      <div className="bg-[#ad1351] ml-20 w-96 px-10 py-12 relative top-12 shadow mb-20">
        <div>
          <h1>Bowen University</h1>
          <h2>Bachelor of Science in Computer Science</h2>
          <span>September 2017-November 2021</span>{" "}
          <span> 4.21(second class upper division)</span>
          <h4>Project Topic</h4>
          Plagiarism detection using data mining
        </div>
      </div>
    </div>
  );
};

export default Education;
