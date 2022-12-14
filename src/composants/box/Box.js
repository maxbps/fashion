import React from "react";

// Import des composants
import { Button } from "../button/Button";

// Import du CSS
import "./Box.css";

function Box(props) {
  // #region [INITIALISATION]
  const { id, title, text, image, button } = props;
  // #endregion

  // #region [INTERFACE]
  return (
    <section id={id} className="containerBox">
      <div
        style={{ backgroundImage: "url(" + image + ")" }}
        className="fullScreenBox text-light d-flex"
      >
        <div className="align-self-center full">
          <h2 className="display-1">{title ? title : "Titre"}</h2>
          {text ? <p className="display-4">{text}</p> : null}
          {button ? <Button link={button} /> : null}
        </div>
      </div>
    </section>
  );
  // #endregion
}

export { Box };
