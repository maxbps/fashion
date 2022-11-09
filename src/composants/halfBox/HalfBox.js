import React from "react";

// Import du CSS
import "./HalfBox.css";

function HalfBox(props) {
  // #region [INITIALISATION]
  const { title, text, image, alignment, id } = props;
  // #endregion

  // #region [INTERFACE]
  return (
    <section id={id} className="containerHalfBox col-md-6">
      <div
        style={{ backgroundImage: "url(" + image + ")" }}
        className={`fullScreenBox text-light d-flex ${alignment ? "text-end" : "text-start"}`}
      >
        <div className="align-self-center full">
        {title ?  <h2 className="display-1">{title}</h2> : null}
        {text ? <p className="display-4">{text}</p> : null}
        </div>
      </div>
    </section>
  );
  // #endregion
}

export { HalfBox };
