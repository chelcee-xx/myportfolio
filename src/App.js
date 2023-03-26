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

  return (
    <div className="font-body">
      <div className="bg-gradient-to-b from-[#1190EF] to-[#00BBFA] lg:h-screen pt-12 px-12 lg:px-20 ">
        <nav className="flex justify-between">
          <h1 className="font-title text-light text-3xl sm:text-4xl lg:text-5xl mb-5">
            Medeh Chelsea
          </h1>
          <div className="flex gap-x-5 cursor-pointer text-light">
            <p className="link link-underline">About me</p>
            <p onClick={onButtonClick} className="link link-underline">
              CV
            </p>
            <p className="link link-underline">Skills</p>
            <p className="link link-underline">Contact me</p>
            <p className="link link-underline">Socials</p>
          </div>
        </nav>
        <div className="items-center flex flex-col-reverse lg:flex-row">
          <div className="w-full flex items-center flex-col lg:block lg:w-3/5 mr-0 lg:mr-16">
            <p className="text-light font-semibold text-xl sm:text-2xl lg:text-4xl mb-5">
              Hello, I'm Chelsea,
            </p>
            <p className="text-light tracking-wide leading-9 text-md sm:text-lg lg:text-xl mb-6">
              Frontend web developer
            </p>
            <button
              onClick={onButtonClick}
              className="px-4 mb-12 py-3 md:mt-1 mt-8 text-blue bg-light font-medium rounded-full tracking-wide hover:text-light hover:bg-head transition-all duration-500"
            >
              Download my resume
            </button>
          </div>
          <div className="flex justify-center mt-8">
            <img
              src={girl}
              alt="tech"
              className="w-1/2 lg:w-auto h-auto"
            />
          </div>
        </div>
      </div>
      <div className="bg-light px-4 sm:px-6 lg:px-20 py-12">
        <About />
      </div>
      <Education />
      <Projects />

      <Skills />
      <Experience />
      <Footer />
      <Contact />
    </div>
  );
}

export default App;
