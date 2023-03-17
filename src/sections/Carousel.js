import React, { useState } from 'react';

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

    return projectsToShow.map(project => (
      
      <div className='br-3 shadow-md p-5 m-3 w-full' key={project.id}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    ));
  };

  return (
    <div>
      <div className="carousel-container">
        <div className="carousel flex">{renderProjects()}</div>
      </div>
      <div className="controls">
        <button onClick={handlePrevClick} disabled={currentSlide === 0}>
          Prev
        </button>
        <button onClick={handleNextClick} disabled={currentSlide === numSlides - 1}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
