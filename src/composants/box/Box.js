import React from "react";
import { Link, useLocation } from "react-router-dom";

// Import du CSS
import "./Box.css";

function Box(props) {
  // #region [INITIALISATION]
  const { id, title, text, image } = props;
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
          <button type="button" className="btn btn-outline-dark m-3">
            <Link to={"/Detail"} className="">En savoir plus</Link>
          </button>
        </div>
      </div>
    </section>
  );
  // #endregion
}

export { Box };
