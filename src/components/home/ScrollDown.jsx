import React from "react";

const ScrollDown = () => {
  return (
    <div className="home__scroll">
      <a href="#contact" className="hhome__scroll-button button-flex">
        <i className="uil uil-mouse-alt home__scroll_pointer wheel"></i>
        <span className="home__scroll-name">Scroll Down</span>
        <i className="uil uil-arrow-down home__scroll-arrow"></i>
      </a>
    </div>
  );
};

export default ScrollDown;
