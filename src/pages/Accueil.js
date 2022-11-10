import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Import des composants
import { Menu } from "../composants/menu/Menu";
import { Banner } from "../composants/banner/Banner";
import { Box } from "../composants/box/Box";
import { HalfBox } from "../composants/halfBox/HalfBox";
import { HalfBoxVideo } from "../composants/halfBox/HalfBoxVideo";
import { Footer } from "../composants/footer/Footer";

// Import des Assets
import { default as list } from "../assets/icons/list.svg";
import { default as femme1 } from "../assets/femme1.jpg";

// Import du CSS
import "./Accueil.css";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function Accueil() {
  // #region [INITIALISATION]
  const [visibleMenu, setVisibleMenu] = useState(false);
  // #endregion

  // #region [UTIL]
  const slideInTop = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        delay: delay || 0,
        duration: duration || 1.5,
        lazy: false,
        scrollTrigger: {
          trigger: elem,
          start: "top 90%",
          end: "bottom center",
        },
      }
    );
  };
  // #endregion

  // #region [EVENT]
  const handleClickMenu = () => {
    setVisibleMenu(!visibleMenu);
  };
  // #endregion

  // #region [HOOK]
  // Au chargement de l'app, on affiche les parties en fonction du scrollTrigger
  useEffect(() => {
    slideInTop("#box1", 0, 3);
    slideInTop("#halfBox1-1", 0, 3);
    slideInTop("#halfBox1-2", 0, 3);
    slideInTop("#box2", 0, 3);
    slideInTop("#halfBox2-1", 0, 3);
    slideInTop("#halfBox2-2", 0, 3);
  }, []);
  // #endregion

  // #region [INTERFACE]
  return (
    <div className="app">
      {/* Gestion du menu */}
      {visibleMenu ? (
        <Menu visible={() => handleClickMenu()} />
      ) : (
        <div
          id="menu"
          className="fixed-top m-5 d-flex text-light nunito title"
          onClick={() => handleClickMenu()}
        >
          <img className="menu-icon" src={list} />
        </div>
      )}
      <Banner />
      <Box id={"box1"} title="c est un titre" image={femme1} text="texte" button="/detail" />
      <div className="container-fluid">
        <div className="row">
          <HalfBox
            id={"halfBox1-1"}
            title="c est un titre"
            image={femme1}
            text="texte"
            alignment={0}
          />
          <HalfBoxVideo
            id={"halfBox1-2"}
            title="c est un titre"
            image={femme1}
            text="texte"
            alignment={1}
          />
        </div>
      </div>
      <Box id={"box2"} title="c est un titre" image={femme1} text="texte" />
      <div className="container-fluid">
        <div className="row">
          <HalfBoxVideo
          id={"halfBox2-1"}
            title="c est un titre"
            image={femme1}
            text="texte"
            alignment={0}
          />
          <HalfBox
          id={"halfBox2-2"}
            title="c est un titre"
            image={femme1}
            text="texte"
            alignment={1}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
  // #endregion
}

export { Accueil };
