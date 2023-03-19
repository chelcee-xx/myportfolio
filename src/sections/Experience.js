import React from "react";
import Card from "../components/Card";

export default function Experience() {
  return (
    <div className="px-6 sm:px-10 md:px-20 bg-light">
      <h1 className="title">Experience</h1>
      <div className="grid gap-y-12 gap-x-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <Card
          title="Tech support specialist"
          company="Primly premium solutions"
          date="Jan. 2022 - Dec. 2022"
          desc="I oversaw daily performance of computer systems,
set up equipment for employee use, performed and ensured proper installation of cables, 
operating systems and appropriate software.
Developed training materials and procedure and train users in proper use of hardware and 
software."
        />
        <Card
          title="Frontend developer"
          company="ULLWeb technologies"
          date="Jul. 2022 - Sep. 2022"
          desc="Collaborated with a specialized team of software developers and designers to help 
deliver requested websites for clients.
Converted UI designs into websites
Wrote elegant, Self-documented code with ReactJs and Bootstrap to build Responsive 
web applications."
        />
        <Card
          title="Frontend developer"
          company="Orange Market"
          date="Dec. 2022 - Feb. 2023"
          desc="Collaborated with a UI designer to develop the UI of an admin dashboard.
Used Firebase Backend as a service (BAAS) as the API for authentication, storage, 
and pagination of the built dashboard"
        />
      </div>
    </div>
  );
}
