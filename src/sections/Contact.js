import React from "react";
import { Icon } from "@iconify/react";

function Contact() {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <div className="bg-blue pt-20 pb-32">
      <h1 className="flex justify-center gap-4 font-semibold text-light mb-5  items-center text-5xl mx-9 lg:px-6 ">
        Don't be a stranger{" "}
        <Icon icon="tabler:mood-smile-beam" className="text-yellow-300" />
      </h1>
      <p className="text-center text-light mb-9 text-lg px-6 md:px-20">
        Reach out to me on my social media handles below:
      </p>
      <div className="flex lg:flex-row flex-col justify-center items-center gap-8 px-6 md:px-20">
        <button className="rounded-full p-2 bg-white flex items-center">
          <Icon
            icon="mdi:twitter"
            className="text-blue hover:text-red-400 text-5xl cursor-pointer"
          />
        </button>
        <button className="flex rounded-full p-2 bg-white items-center">
          <Icon
            icon="la:linkedin-in"
            className="text-blue hover:text-red-400 text-5xl cursor-pointer"
          />
        </button>
        <button className="rounded-full p-2 bg-white flex items-center">
          <Icon
            icon="tabler:mail-opened"
            className="text-blue hover:text-red-400 text-5xl cursor-pointer"
          />
        </button>
        <button className="rounded-full p-2 bg-white flex items-center">
          <Icon
            icon="uim:github-alt"
            className="text-blue hover:text-red-400 text-5xl cursor-pointer"
          />
        </button>
      </div>
      <div className="flex justify-center text-center">
        <p className=" text-white text-md font-medium font-sans mt-9">
          Designed and developed by Chelsea Medeh <br /> Copyright © {year}
        </p>
      </div>
    </div>
  );
}

export default Contact;
