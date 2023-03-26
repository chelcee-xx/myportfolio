import { useState } from "react";
import girl from "./img/Software-Developer.png";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

function App() {
  // Function will execute on click of button
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("Resume_CHELSEA.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "chelsea.pdf";
        alink.click();
      });
    });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };
  return (
    <div className="font-body">
      <div className="bg-gradient-to-b from-[#1190EF] to-[#00BBFA] lg:h-screen pt-12 px-12 lg:px-20 ">
        <nav className="lg:flex justify-between hidden">
          <h1 className="font-title text-light text-8xl lg:text-6xl mb-5">
            Medeh Chelsea
          </h1>
          <div className="flex gap-x-5 cursor-pointer text-light">
            <p onClick={() => scrollToSection("about")} className="link link-underline">About me</p>
            <p onClick={onButtonClick} className="link link-underline">
              CV
            </p>
            <p onClick={() => scrollToSection("Skills")} className="link link-underline">Skills</p>
            <p onClick={() => scrollToSection("Footer")} className="link link-underline">Contact me</p>
            <p onClick={() => scrollToSection("Contact")} className="link link-underline">Socials</p>
          </div>
        </nav>
        <nav className="lg:hidden">
          <div className="flex justify-between">
            <h1 className="font-title text-light text-8xl lg:text-5xl mb-5">
              Medeh Chelsea
            </h1>
            <div
              className="flex gap-x-5 cursor-pointer text-light lg:hidden"
              onClick={toggleNav}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="56"
                viewBox="0 0 16 16"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"
                />
              </svg>
            </div>
          </div>
          <div
            className={`lg:flex lg:items-center lg:w-auto ${
              showNav ? "block" : "hidden"
            }`}
          >
            <div className="bg-white rounded">
              <p className="nav" onClick={() => scrollToSection("about")}>About me</p>
              <p onClick={onButtonClick} className="lg:link nav lg:link-underline">
                CV
              </p>
              <p className="nav" onClick={() => scrollToSection("Skills")} >Skills</p>
              <p className="nav" onClick={() => scrollToSection("Footer")}>Contact me</p>
              <p className="nav" onClick={() => scrollToSection("Contact")}>Socials</p>
            </div>
          </div>
         
        </nav>
        <div className="items-center flex flex-col-reverse lg:flex-row">
          <div className="w-full flex items-center flex-col lg:block lg:w-3/5 mr-0 lg:mr-16">
            <p className="text-light font-semibold text-6xl mb-5">
              Hello, I'm Chelsea,
            </p>
            <p className="text-light tracking-wide leading-9 text-3xl lg:text-2xl mb-6">
              Frontend web developer
            </p>
            <button
              onClick={onButtonClick}
              className="px-4 mb-12 text-xl py-3 md:mt-1 mt-8 text-blue bg-light font-medium rounded-full tracking-wide hover:text-light hover:bg-head transition-all duration-500"
            >
              Download my resume
            </button>
          </div>
          <div className="flex justify-center mt-8">
            <img src={girl} alt="tech" className="w-1/2 lg:w-auto h-auto" />
          </div>
        </div>
      </div>
      <section id="about" className="bg-light px-4 lg:px-20 py-12">
        <About />
      </section>
      <section id="Education"> <Education /></section>
      <section id="Projects"><Projects /></section>
      <section id="Skills"> <Skills /></section>
      <section id="Experience"><Experience /></section>
      <section id="Footer"> <Footer /></section>
      <section id="Contact"><Contact /></section>      
    </div>
  );
}

export default App;
