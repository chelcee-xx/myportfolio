import React, { useState } from "react";

const Carousel = ({ projects }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevClick = () => {
    setCurrentSlide(currentSlide - 1);
  };

  const handleNextClick = () => {
    setCurrentSlide(currentSlide + 1);
  };

  const numSlides = Math.ceil(projects.length / 3);

  const renderProjects = () => {
    const start = currentSlide * 3;
    const end = start + 3;

    const projectsToShow = projects.slice(start, end);

    return projectsToShow.map((project) => (
      <div className="br-3 shadow-md p-5 m-3 w-full relative" key={project.id}>
        <div className=" border-blue rounded border-4">
          <a href={project.link}>
            <img
              src={project.img}
              className="h-40  object-cover w-full"
              alt="project"
            />
          </a>
        </div>
        <h3 className="text-center font-semibold w-full mb-4 text-2xl uppercase mt-8">
          {project.title}
        </h3>
        <p className="font-medium text-[#3F4756] mb-10">
          {project.description}
        </p>
        
        <a
          href={project.link}
          className="cursor-pointer absolute bottom-3 font-medium text-blue text-xl text-center"
        >
          Check it out
        </a>
      </div>
    ));
  };

  return (
    <div>
      <div className="carousel-container">
        <div className="carousel flex">{renderProjects()}</div>
      </div>
      <div className="controls flex justify-end gap-8">
        <button
          onClick={handlePrevClick}
          className="bg-red-500 py-2 text-light font-medium px-4 rounded"
          disabled={currentSlide === 0}
        >
          Prev
        </button>
        <button
          onClick={handleNextClick}
          className="bg-red-500 py-2 text-light font-medium px-4 rounded"
          disabled={currentSlide === numSlides - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
