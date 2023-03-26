import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import html from "../img/html.svg";
import css from "../img/css.svg";
import javascript from "../img/javascript.svg";
import react from "../img/react.svg";
import firebase from "../img/firebase.svg";
import nextjs from "../img/nextjs.svg";
import TailwindCss from "../img/tailwindcss.svg";
import typescript from "../img/typescript.svg";
import bootstrap from "../img/bootstrap.svg";

export default function Skills() {
  return (
    <div className="lg:px-20  py-12">
      <h1 className="title lg:ml-0 ml-12">My skills</h1>
      <div className="mt-12 lg:px-12 lg:grid-cols-6 text-center md:grid lg:grid md:grid-cols-3 md:gap-14 gap-8 px-8 lg:gap-12">
        <div className="">
          <div>
          <img className="w-full" src={html} alt="logo" />

          </div>
          <h3 className=" text-md lg:text-xl  leading-9 text-blue mt-4 font-medium">
            HTML
          </h3>
        </div>
        <div className="">
          <div>
          <img className="w-full" src={css} alt="logo" />

          </div>
          <h3 className=" text-md lg:text-xl  leading-9 text-blue mt-4 font-medium">
            CSS
          </h3>
        </div>
        <div className="">
          <div>
          <img className="w-full" src={javascript} alt="logo" />

          </div>
          <h3 className="text-md lg:text-xl  leading-9 text-blue mt-4 font-medium">
            Javascript
          </h3>
        </div>
        <div className="">
          <div>
          <img className="w-full" src={react} alt="logo"/>

          </div>
          <h3 className="text-md lg:text-xl  leading-9 text-blue mt-4 font-medium">
            ReactJs
          </h3>
        </div>
        <div className="">
          <div>
          <img className="w-full" src={nextjs} alt="logo" />

          </div>
          <h3 className="text-md lg:text-xl  leading-9 text-blue mt-4 font-medium">
            NextJs
          </h3>
        </div>
        <div className="">
          <div>
          <img className="w-full" src={firebase} alt="logo" />

          </div>
          <h3 className="text-md lg:text-xl  leading-9 text-blue mt-4 font-medium">
            Firebase
          </h3>
        </div>
        <div className="">
          <div>
          <img className="w-full" src={bootstrap} alt="logo" />

          </div>
          <h3 className="text-md lg:text-xl  leading-9 text-blue mt-4 font-medium">
            Bootstrap
          </h3>
        </div>
        <div className="">
          <div>
          <img className="w-full" src={TailwindCss} alt="logo" />

          </div>
          <h3 className="text-md lg:text-xl  leading-9 text-blue mt-4 font-medium">
            TailwindCss
          </h3>
        </div>
        <div className="">
          <div>
          <img className="w-full" src={typescript} alt="logo" />

          </div>
          <h3 className="text-md lg:text-xl  leading-9 text-blue mt-4 font-medium">
            Typescript
          </h3>
        </div>
      </div>
     
    </div>
  );
}
