import React from "react";
import { Icon } from "@iconify/react";

const Education = () => {
  return (
    <div className="bg-gradient-to-b from-[#1190EF] to-[#00BBFA] pt-8 lg:pt-12 px-10 md:px-10">
      <div className="relative lg:px-20">
        <Icon
          icon="noto:graduation-cap"
          className="absolute  lg:left-11 -left-5 -rotate-45 text-4xl sm:text-5xl lg:text-6xl"
        />
        <h1 className="text-7xl lg:text-4xl text-[#232d41] font-sans font-bold">
          Education
        </h1>
      </div>
      <div className="bg-[#ad1351] rounded-lg w-3/4 lg:w-96 ml-0 md:ml-20 pr-4 md:pr-9 pl-4 md:pl-9 pt-5 pb-8 relative top-8 lg:top-12 shadow mb-10 md:mb-20">
        <div>
          <h1 className=" text-[#5effff] mb-2 font-medium text-5xl lg:text-xl ">
            Bowen University
          </h1>
          <h2 className="mb-4 text-[#ABFF4F] mt-5 text-3xl lg:text-lg">
            Bachelor of Science in Computer Science
          </h2>
          <div className="bg-[#6bffff] px-2 mb-6 lg:mb-4 py-2 text-3xl rounded text-[#ad1351] w-fit font-medium lg:text-sm ">
            Sep. 2017 - Nov. 2021
          </div>{" "}
          <div className="bg-[#abff4f] px-2 py-2 text-3xl rounded text-[#ad1351] w-fit font-medium lg:text-sm ">
            CGPA: 4.21 (second class upper division)
          </div>
          <h4 className="mt-4 text-3xl lg:text-lg font-medium text-[#2fcbff]">
            Project Topic: Plagiarism detection using data mining
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Education;
