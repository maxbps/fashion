import React from "react";
import { Link } from "react-router-dom";

// Import du CSS
import "./Button.css";

function Button(props) {
  // #region [INITIALISATION]
  const { link } = props;
  // #endregion

  // #region [INTERFACE]
  return (
    <button type="button" className="button">
      <Link to={link} className="link lead medium">
        EN SAVOIR PLUS
      </Link>
    </button>
  );
  // #endregion
}

export { Button };
