import React, { useState } from "react";
import "../GlobalStyles.css";
const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const data = [
    {
      img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZXhwZW5zaXZlJTIwc3BvcnQlMjBjYXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60",
      id: 1,
    },
    {
      img: "https://images.unsplash.com/photo-1507767439269-2c64f107e609?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZXhwZW5zaXZlJTIwc3BvcnQlMjBjYXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60",
      id: 2,
    },

    {
      img: "https://images.unsplash.com/photo-1474015977340-64a93f54a9f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGV4cGVuc2l2ZSUyMHNwb3J0JTIwY2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60",
      id: 4,
    },
    {
      img: "https://images.unsplash.com/photo-1504215680853-026ed2a45def?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGV4cGVuc2l2ZSUyMHNwb3J0JTIwY2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60",
      id: 5,
    },
  ];
  const previous = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? data.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const next = () => {
    const isLastSlider = currentIndex === data.length - 1;
    const newIndex = isLastSlider ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div>
      <div className='slider-container'>
        <img src={data[currentIndex].img} />
        <button onClick={previous} id='prev'>
          previous item
        </button>
        <button onClick={next} id='next'>
          next item
        </button>
      </div>
    </div>
  );
};

export default Slider;
