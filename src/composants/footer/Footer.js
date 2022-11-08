import React from "react";

// Import du CSS
import "./Footer.css";

function Footer() {
  // #region [INTERFACE]
  return (
    <section id="footer">
      <div className="container-fluid pt-3 bg-light">
        <div className="row align-items-center">
          <div className="col-lg-6 text-center">
            <h1 className="display-1">AMON</h1>
          </div>
          <div className="col-lg-6 row">

            <div className="col-lg-4 text-start">
              <h3>CONTACT</h3>
              <ul className="list-unstyled lead">
                <li>
                  Qui sommes-nous ?
                </li>
                <li>
                  Notre histoire
                </li>
                <li>
                  Nos valeurs
                </li>
              </ul>
            </div>

            <div className="col-lg-4 text-start">
              <h3 className="">SERVICES</h3>
              <ul className="list-unstyled lead">
              <li>
                  Qui sommes-nous ?
                </li>
                <li>
                  Notre histoire
                </li>
                <li>
                  Nos valeurs
                </li>
              </ul>
            </div>

            <div className="col-lg-4 text-start">
              <h3 className="">A PROPOS</h3>
              <ul className="list-unstyled lead">
              <li>
                  Qui sommes-nous ?
                </li>
                <li>
                  Notre histoire
                </li>
                <li>
                  Nos valeurs
                </li>
              </ul>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
  // #endregion
}

export { Footer };
