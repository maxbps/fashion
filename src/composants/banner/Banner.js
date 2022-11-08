import React from "react";

// Import du CSS
import "./Banner.css";

// Import des Assets
import { default as banner } from "../../assets/banner.mp4";

function Banner() {
  // #region [INTERFACE]
  return (
    <section id="banner" className="d-flex align-items-center">
      <div className="container-fluid text-end text-light">
        <h1 className="mb-1 display-1">AMON</h1>
        <h2 className="mb-5 display-4">Découvre la nouvelle collection</h2>
        <video
          id="bannerVideo"
          playsinline="playsinline"
          autoplay="autoplay"
          muted="muted"
          loop="loop"
        >
          <source src={banner} type="video/mp4"></source>
        </video>
      </div>
    </section>
  );
  // #endregion
}

export { Banner };
