import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Import des composants
import { Banner } from "../composants/banner/Banner";
import { Box } from "../composants/box/Box";
import { HalfBox } from "../composants/halfBox/HalfBox";
import { HalfBoxVideo } from "../composants/halfBox/HalfBoxVideo";
import { Footer } from "../composants/footer/Footer";

// Import des Assets
import { default as femme1 } from "../assets/femme1.jpg";

// Import du CSS
import "../App.css";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function Accueil() {
  // #region [UTIL]
  const slideInTop = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        y: 200,
      },
      {
        opacity: 1,
        y: 0,
        delay: delay || 0,
        duration: duration || 1.5,
        lazy: false,
        scrollTrigger: {
          trigger: elem,
          start: "top center",
          end: "bottom center",
        },
      }
    );
  };
  // #endregion

  // #region [HOOK]
  // Au chargement de l'app, on affiche les parties en fonction du scrollTrigger
  useEffect(() => {
    // slideInTop("#introduction");
    // slideInTop(".box, .halfBox");
  }, []);
  // #endregion

  // #region [INTERFACE]
  return (
    <div className="app">
      <Banner />
      <Box title="c est un titre" image={femme1} text="texte" />
      <div className="container-fluid">
        <div className="row">
          <HalfBox
            title="c est un titre"
            image={femme1}
            text="texte"
            alignment={0}
          />
          <HalfBoxVideo
            title="c est un titre"
            image={femme1}
            text="texte"
            alignment={1}
          />
        </div>
      </div>
      <Box title="c est un titre" image={femme1} text="texte" />
      <div className="container-fluid">
        <div className="row">
          <HalfBoxVideo
            title="c est un titre"
            image={femme1}
            text="texte"
            alignment={0}
          />
           <HalfBox
            title="c est un titre"
            image={femme1}
            text="texte"
            alignment={1}
          />
        </div>
      </div>
      <Footer/>
    </div>
  );
  // #endregion
}

export { Accueil };
