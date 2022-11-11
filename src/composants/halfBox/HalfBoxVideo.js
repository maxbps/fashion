import React from "react";

// Import du CSS
import "./HalfBox.css";

function HalfBoxVideo(props) {
  // #region [INITIALISATION]
  const {id, title, text, video, alignment } = props;
  // #endregion

  // #region [INTERFACE]
  return (
    <section id={id} className="containerHalfBox col-md-6">
      <div
        className={`fullScreenBox text-light d-flex ${
          alignment ? "text-end" : "text-start"
        }`}
      >
        <div className="align-self-center full">
          <h2 className="display-1">{title ? title : "Titre"}</h2>
          {text ? <p className="display-4">{text}</p> : null}
        </div>
        <video
          className="halfBoxVideo"
          playsinline="playsinline"
          autoplay="autoplay"
          muted="muted"
          loop="loop"
        >
          <source src={video} type="video/mp4"></source>
        </video>
      </div>
    </section>
  );
  // #endregion
}

export { HalfBoxVideo };
