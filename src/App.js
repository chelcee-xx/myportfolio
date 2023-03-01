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
      fetch('Resume_CHELSEA.pdf').then(response => {
          response.blob().then(blob => {
              // Creating new object of PDF file
              const fileURL = window.URL.createObjectURL(blob);
              // Setting various property values
              let alink = document.createElement('a');
              alink.href = fileURL;
              alink.download = 'chelsea.pdf';
              alink.click();
          })
      })
  }

  return (
    <div className="font-body">
      <div className="bg-gradient-to-b from-[#1190EF] to-[#00BBFA] h-screen pt-12 px-20">
        <nav className="flex justify-between">
          {" "}
          <h1 className=" font-title text-light text mb-5 text-5xl">
            Medeh Chelsea
          </h1>
          <div className="flex gap-x-5 [&>*]:transition-all [&>*]:cursor-pointer [&>*]:text-light">
            <p className="link link-underline ">About me</p>
            <p onClick={onButtonClick} className="link link-underline ">CV</p>
            <p className="link link-underline ">Skills</p>
            <p className="link link-underline ">Contact me</p>
            <p className="link link-underline ">Socials</p>
            {/* toggle switch for dark mode */}
          </div>
        </nav>
        <div className="items-center flex">
          <div className=" w-3/5 mr-16">
            <p className="text-light mb-5  font-semibold text-4xl">
              {" "}
              Hello, I'm Chelsea,
            </p>
            <p className="text-light tracking-wide  leading-9 text-xl">
              Frontend web developer
            </p>
            <button onClick={onButtonClick} className=" px-4 py-3 mt-8 text-blue bg-light font-medium rounded-full tracking-wide hover:text-light hover:bg-head transition-all duration-500">
              Download my resume
            </button>
          </div>
          <div>
            <img src={girl} alt="tech" className="" />
          </div>
        </div>
      </div>
      <div className="bg-light px-20 py-12">
        <About />
      </div>
      <Education />
      <Skills />
      <Projects/>
      <Experience />
      <Contact />
      <Footer />
      {/* // My skills should be in animate progress bar, link should be under title 
       "Don't be a stranger" with fine big animated on hover icons 
       contact me should be title "connect with me" and then an input with EMail and message iono how that would work but dw
       it should be the footer abeg
       projects should be in a photo carousel, maybe 3d sef who knows
        the whole page should have one animation or the othe
        add link to download cv at the header
        */}
      {/* <div class="absolute leading-none bottom-0 left-0 w-full overflow-hidden  custom-shape-divider-bottom-1675285802">
        <svg
        className="relative block"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className=" fill-[#1190EF]"
          ></path>
        </svg>
      </div> */}
    </div>
  );
}

export default App;
