import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

export default function Skills() {
  return (
    <div className="lg:px-20  py-12">
      <h1 className="title lg:ml-0 ml-12">My skills</h1>
      <div className="mt-12 hidden lg:px-12 lg:grid-cols-8 text-center md:grid lg:grid md:grid-cols-5 md:gap-8 grid-cols-2 gap-8 px-8 lg:gap-5">
        <div className="">
          <CircularProgressbar value={90} text={`90%`} />
          <h3 className=" text-md lg:text-xl  leading-9 text-blue mt-4 font-medium">
            HTML & CSS
          </h3>
        </div>
        <div className="">
          <CircularProgressbar value={80} text={`80%`} />
          <h3 className="text-md lg:text-xl  leading-9 text-blue mt-4 font-medium">
            Javascript
          </h3>
        </div>
        <div className="">
          <CircularProgressbar value={85} text={`85%`} />
          <h3 className="text-md lg:text-xl  leading-9 text-blue mt-4 font-medium">
            ReactJs
          </h3>
        </div>
        <div className="">
          <CircularProgressbar value={65} text={`65%`} />
          <h3 className="text-md lg:text-xl  leading-9 text-blue mt-4 font-medium">
            Firebase
          </h3>
        </div>
        <div className="">
          <CircularProgressbar value={87} text={`87%`} />
          <h3 className="text-md lg:text-xl  leading-9 text-blue mt-4 font-medium">
            Bootstrap
          </h3>
        </div>
        <div className="">
          <CircularProgressbar value={87} text={`87%`} />
          <h3 className="text-md lg:text-xl  leading-9 text-blue mt-4 font-medium">
            TailwindCss
          </h3>
        </div>
        <div className="">
          <CircularProgressbar value={40} text={`40%`} />
          <h3 className="text-md lg:text-xl  leading-9 text-blue mt-4 font-medium">
            NextJs
          </h3>
        </div>
        <div className="">
          <CircularProgressbar value={40} text={`40%`} />
          <h3 className="text-md lg:text-xl  leading-9 text-blue mt-4 font-medium">
            Typescript
          </h3>
        </div>
      </div>
      <div className="lg:hidden px-12">
        <div className="">
          <h3 className=" text-xl leading-9 mt-4 font-medium">HTML & CSS</h3>
          <Progress percent={90} />
        </div>
        <div className="">
          <h3 className="text-xl leading-9 mt-4 font-medium">Javascript</h3>
          <Progress percent={80} />
        </div>
        <div className="">
          <h3 className="text-xl leading-9 mt-4 font-medium">ReactJs</h3>
          <Progress percent={85} />
        </div>
        <div className="">
          <h3 className="text-xl leading-9 mt-4 font-medium">Firebase</h3>
          <Progress percent={65} />
        </div>
        <div className="">
          <h3 className="text-xl leading-9 mt-4 font-medium">Bootstrap</h3>
          <Progress percent={87} />
        </div>
        <div className="">
          <h3 className="text-xl leading-9 mt-4 font-medium">TailwindCss</h3>
          <Progress percent={87} />
        </div>
        <div className="">
          <h3 className="text-xl leading-9 mt-4 font-medium">NextJs</h3>
          <Progress percent={40} />
        </div>
        <div className="">
          <h3 className="text-xl leading-9 mt-4 font-medium">Typescript</h3>
          <Progress percent={40} />
         
        </div>
      </div>
    </div>
  );
}
