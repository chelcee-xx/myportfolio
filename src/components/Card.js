import React from "react";

export default function Card(props) {
  return (
    <div>
      <div className="card drop-shadow-lg w-[34rem] px-9 pb-9 rounded-xl shadow-lg bg-light border-1 border-gray-200 shadow-gray-200 p-5">
        <div>
          <div className="flex items-center flex-col">
            <h1 className="text-blue mb-1 text-2xl font-medium">
              {props.company}
            </h1>
            <p className="text-[#3F4756] text-xl font-medium">{props.title}</p>
            <p className="text-[#3F4756] mb-4 font-medium">{props.date}</p>
          </div>
          <p className="font-medium text-[#3F4756] text-justify">
            {props.desc}
          </p>
        </div>
      </div>
    </div>
  );
}
