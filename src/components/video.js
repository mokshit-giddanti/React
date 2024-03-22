import React from "react";
import { useLocation } from "react-router-dom";

const Video = () => {
  const location = useLocation();
  const isRoot = location.pathname === "/";
  const isRoot1 = location.pathname === "/welcome";

  if (!isRoot&&!isRoot1) {
    return (
      <div className="hero-container">
        <video className="video" src="/video.mp4" autoPlay loop muted />
      
      </div>
    );
  } else {
    return null; // Return null if the path is '/'
  }
};

export default Video;