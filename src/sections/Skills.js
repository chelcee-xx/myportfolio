import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Skills() {
  return (
    <div className="px-20  py-12">
      <h1 className="title">My skills</h1>
      <div className="mt-12 px-12 flex text-center gap-5">
        <div className='' >
          <CircularProgressbar value={90} text={`90%`} />
          <h3 className=" text-xl leading-9 text-blue mt-4 font-medium">HTML & CSS</h3>
        </div>
        <div className=''>
          <CircularProgressbar value={80} text={`80%`} />
          <h3 className="text-xl leading-9 text-blue mt-4 font-medium">
            Javascript
          </h3>
        </div>
        <div className=''>
          <CircularProgressbar value={85} text={`85%`} />
          <h3 className="text-xl leading-9 text-blue mt-4 font-medium">ReactJs</h3>
        </div>
        <div className=''>
          <CircularProgressbar value={65} text={`65%`} />
          <h3 className="text-xl leading-9 text-blue mt-4 font-medium">Firebase</h3>
        </div>
        <div className=''>
          <CircularProgressbar value={87} text={`87%`} />
          <h3 className="text-xl leading-9 text-blue mt-4 font-medium">
            Bootstrap
          </h3>
        </div>
        <div className=''>
          <CircularProgressbar value={87} text={`87%`} />
          <h3 className="text-xl leading-9 text-blue mt-4 font-medium">
            TailwindCss
          </h3>
        </div>
        <div className=''>
          <CircularProgressbar value={40} text={`40%`} />
          <h3 className="text-xl leading-9 text-blue mt-4 font-medium">NextJs</h3>
        </div>
        <div className=''>
          <CircularProgressbar value={40} text={`40%`} />
          <h3 className="text-xl leading-9 text-blue mt-4 font-medium">
            Typescript
          </h3>
        </div>
      </div>
    </div>
  );
}
