import React from "react";

export default function Card(props) {
  return (
    <div>
      <div className="card drop-shadow-lg mb-12 w-full px-9 pb-9 rounded-xl shadow-lg bg-light border-1 border-gray-200 shadow-gray-200 p-5">
        <div>
          <div className="flex items-center flex-col">
            <h1 className="text-blue mb-1 text-5xl lg:text-2xl font-medium">
              {props.company}
            </h1>
            <div>
              <a href={props.link}>
                <img
                  src={props.img}
                  alt="project"
                  className="lg:h-40  cursor-pointer object-contain w-full"
                />
              </a>
            </div>
            <p className="text-[#3F4756] text-5xl mt-5 lg:text-xl font-medium capitalize">
              {props.title}
            </p>
            <p className="text-[#3F4756] mb-4 lg:text-xl text-4xl font-medium">
              {props.date}
            </p>
          </div>
          <p className="font text-[#3F4756] text-4xl lg:text-xl lg:text-justify">
            {props.desc}
          </p>
        </div>
      </div>
    </div>
  );
}
