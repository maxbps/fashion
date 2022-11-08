import React from "react";

// Import du CSS
import "./HalfBox.css";

function HalfBox(props) {
  // #region [INITIALISATION]
  const { title, text, image, alignment } = props;
  // #endregion

  // #region [INTERFACE]
  return (
    <section className="containerHalfBox col-md-6">
      <div
        style={{ backgroundImage: "url(" + image + ")" }}
        className={`fullScreenBox text-light d-flex ${alignment ? "text-end" : "text-start"}`}
      >
        <div className="align-self-center full">
        <h2 className="display-1">{title ? title : "Titre"}</h2>
        {text ? <p className="display-4">{text}</p> : null}
        </div>
      </div>
    </section>
  );
  // #endregion
}

export { HalfBox };
