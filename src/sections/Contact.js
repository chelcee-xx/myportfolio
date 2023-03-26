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
      <p className="text-center text-light mb-9 text-4xl lg:text-lg px-6 md:px-20">
        Reach out to me on my social media handles below:
      </p>
      <div className="flex flex-row justify-center items-center gap-8 px-6 md:px-20">
        <button className="rounded-full p-2 bg-white flex items-center">
          <a href="https://twitter.com/nikki__dev?s=11&t=L4KBTDbvCox2oFMMuxs9VQ">
            <Icon
              icon="mdi:twitter"
              className="text-blue hover:text-red-400 text-8xl lg:text-5xl cursor-pointer"
            />
          </a>
        </button>
        <button className="flex rounded-full p-2 bg-white items-center">
        <a href="https://www.linkedin.com/in/nikki-devs">
          <Icon
            icon="la:linkedin-in"
            className="text-blue hover:text-red-400 text-8xl lg:text-5xl cursor-pointer"
          />
          </a>
        </button>
        <button className="rounded-full p-2 bg-white flex items-center">
        <a href="mailto:chelcee1614@gmail.com">
          <Icon
            icon="tabler:mail-opened"
            className="text-blue hover:text-red-400 text-8xl lg:text-5xl cursor-pointer"
          /></a>
        </button>
        <button className="rounded-full p-2 bg-white flex items-center">
        <a href="https://github.com/chelcee-xx">
          <Icon
            icon="uim:github-alt"
            className="text-blue hover:text-red-400 text-8xl lg:text-5xl cursor-pointer"
          /></a>
        </button>
      </div>
      <div className="flex justify-center text-center">
        <p className=" text-white text-3xl lg:text-xl font-medium font-sans mt-9">
          Designed and developed by Chelsea Medeh <br /> Copyright © {year}
        </p>
      </div>
    </div>
  );
}

export default Contact;
