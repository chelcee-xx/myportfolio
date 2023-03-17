import React from "react";
import { Icon } from "@iconify/react";

const Education = () => {
  return (
    <div className="bg-gradient-to-b from-[#1190EF] to-[#00BBFA] pt-12 px-20">
      <div className="relative">
        <Icon
          icon="noto:graduation-cap"
          className="absolute bottom-3 -left-9 -rotate-45 text-6xl"
        />
        <h1 className="text-4xl text-[#232d41] font-sans font-bold">
          Education
        </h1>
      </div>
      <div className="bg-[#ad1351] rounded-lg w-96 ml-20 pr-9 pl-9 pt-5 pb-8 relative top-12 shadow mb-20">
        <div>
          <h1 className=" text-[#5effff] mb-2 font-medium text-2xl">
            Bowen University
          </h1>
          <h2 className="mb-4 text-[#ABFF4F] text-lg">
            Bachelor of Science in Computer Science
          </h2>
          <div className="bg-[#6bffff] px-2 mb-4 py-2 rounded text-[#ad1351] w-fit font-medium">
            Sep. 2017 - Nov. 2021
          </div>{" "}
          <div className="bg-[#abff4f] px-2 py-2 rounded text-[#ad1351] w-fit font-medium">
            CGPA: 4.21 (second class upper division)
          </div>
          <h4 className="mt-4 text-lg font-medium text-[#2fcbff]">
            Project Topic: Plagiarism detection using data mining
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Education;
