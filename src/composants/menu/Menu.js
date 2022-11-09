import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Import du CSS
import "./Menu.css";

// Initialisation de gsap
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function Menu(props) {
  const { visible } = props;

  // #region [UTIL]
  // Fonction pour faire apparaitre le menu deroulé
  const animOpenMenu = (elem) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0.5,
        x: -200,
      },
      {
        opacity: 1,
        x: 0,
        delay: 0,
        duration: 0.6,
      }
    );
  };
  // #endregion

  // region [HOOK]
  useEffect(() => {
    animOpenMenu(".menu");
  }, []);
  // #endregion

  // #region [INTERFACE]
  return (
    <div
      id="visibleMenu"
      className="menu bg-light text-center"
      onClick={visible}
    >
      <h1 className="mt-5 display-1">AMON</h1>
      <div className="mt-5 p-4 text-start">
        <h3>CONTACT</h3>
        <ul className="list-unstyled lead">
          <li>Qui sommes-nous ?</li>
          <li>Notre histoire</li>
          <li>Nos valeurs</li>
        </ul>
      </div>
      <div className="p-4 text-start">
        <h3 className="">SERVICES</h3>
        <ul className="list-unstyled lead">
          <li>Qui sommes-nous ?</li>
          <li>Notre histoire</li>
          <li>Nos valeurs</li>
        </ul>
      </div>
      <div className="p-4 text-start">
        <h3 className="">A PROPOS</h3>
        <ul className="list-unstyled lead">
          <li>Qui sommes-nous ?</li>
          <li>Notre histoire</li>
          <li>Nos valeurs</li>
        </ul>
      </div>
    </div>
  );
  // #endregion
}

export { Menu };
