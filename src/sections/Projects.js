import React from "react";
import Carousel from "./Carousel";
import dma from "../img/3dma.png";
import Caregreek from "../img/caregreek.png";
import Dashboard from "../img/dashboard.png";
import Highcermatthew from "../img/highcermatthew.png";
import Indigo from "../img/indigo.png";
import Recipe from "../img/recipe.png";
import Weather from "../img/weather.png";
import orange from "../img/orange.png";

const projects = [
  {
    id: 1,
    img: dma,
    link: "https://3dma.netlify.app/",
    title: "3dma",
    description:
      "A complete website built for a client using ReactJs. I implemented the use of React Router and made it fully responsive",
  },
  {
    id: 2,
    img: Indigo,
    title: "indigo",
    link: "https://indigo-theta.vercel.app/",
    description: "This is a webpage for a restaurant. It is a practice project",
  },
  {
    id: 3,
    img: orange,
    title: "orange market",
    link: "https://orange-market-admin-1nuei8gp6-orangemarket.vercel.app/dashboard",
    description:
      "An admin dashboard built using React for a client. Developed from a figma design by the UI/UX designer on the project",
  },
  {
    id: 4,
    img: Weather,
    title: "Weather",
    link: "https://chelsweather.netlify.app/",
    description:
      "A practice project i used to learn how to get information from an API. I used the open weather map Api for this project and tried to make the design simplistic",
  },
  {
    id: 5,
    img: Dashboard,
    title: "Dashboard",
    link: "https://chelsdashboard.netlify.app/",
    description:
      "A practice React Project. i made this dashboard and applied concepts such as routing and useContext to toggle between light b=mode and dark mode. This projects was designed using scss",
  },
  {
    id: 6,
    img: Caregreek,
    link: "https://chelsea-caregreek.netlify.app/",
    title: "Caregreek",
    description: "This is a static webpage designed for a cleaning company",
  },
  {
    id: 7,
    img: Highcermatthew,
    link: "https://highcermatthew.netlify.app/",
    title: "Highcer matthew",
    description: "A one page website built for a client using ReactJs",
  },
  {
    id: 8,
    img: Recipe,
    link: "https://tailwind-trial-one.vercel.app/#",
    title: "Recipe",
    description: "A practice project i used to learn Tailwind",
  },
];

const App = () => {
  return (
    <div className="px-20 mb-12">
      <h1 className="title">My Projects</h1>
      <Carousel projects={projects} />
    </div>
  );
};

export default App;
