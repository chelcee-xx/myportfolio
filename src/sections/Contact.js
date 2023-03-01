import React from "react";
import { Icon } from "@iconify/react";

function Contact() {
  return (
    <div className="bg-blue mt-9 pt-24 pb-32">
      <h1 className=" flex justify-center gap-4 font-semibold text-light mb-5 text-5xl">
        Don't be a stranger <Icon icon="tabler:mood-smile-beam" className="text-yellow-300" />
      </h1>
      <p className="text-center text-light mb-9 text-lg">Reach out to me on my social media handles below:</p>
      <div className="flex justify-center items-center gap-12">
        <div className="rounded-full p-2 bg-white flex items-center gap-3">
        <Icon icon="mdi:twitter" className="text-blue text-5xl cursor-pointer"/>
     
          
        </div>{" "}
        <div className="flex rounded-full p-2 bg-white items-center gap-3">
        <Icon icon="la:linkedin-in" className="text-blue text-5xl cursor-pointer"/>
  
        </div>{" "}
        <div className="rounded-full p-2 bg-white flex items-center gap-3">
        <Icon icon="tabler:mail-opened"  className="text-blue text-5xl cursor-pointer"/>
  
        </div>
      </div>
    </div>
  );
}

export default Contact;
