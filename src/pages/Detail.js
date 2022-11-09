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
import "./Detail.css";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function Detail() {
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
      <Box id={"box1"} title="c est un titre" image={femme1} text="texte" />
      <div className="container-fluid">
        <div className="row align-items-center">
          <HalfBox id={"halfBox1-1"} image={femme1} />
          <div id={"halfBox1-2"} className="col-lg-6 text-dark p-5">
            <h1 className="display-1">AMON</h1>
            <h2 className="display-4">Praesent ut mi aliquet lobortis </h2>
            <p className="lead">
              In quis egestas nisi. Praesent ut mi aliquet, lobortis nulla at,
              commodo leo. Cras ac neque sagittis, efficitur libero a, feugiat
              metus. Phasellus a eros at tortor facilisis tincidunt. Aliquam
              ornare nec orci vitae tristique. Nulla facilisi. Praesent vel
              suscipit mauris. Mauris interdum orci a ex rutrum, ac bibendum
              purus luctus. Ut non vestibulum elit, sed aliquet justo.
            </p>
            <p className="lead">
              Integer blandit viverra justo, sed interdum lorem. Vestibulum
              pellentesque risus ut viverra gravida. Integer vehicula felis
              ipsum, sit amet vestibulum purus imperdiet sed. Cras aliquam
              ligula justo, vitae hendrerit eros fermentum ut. Donec cursus elit
              in metus molestie, vitae congue quam malesuada. In quis egestas
              nisi. Praesent ut mi aliquet, lobortis nulla at, commodo leo. Cras
              ac neque sagittis, efficitur libero a, feugiat metus. Phasellus a
              eros at tortor facilisis tincidunt. Aliquam ornare nec orci vitae
              tristique. Nulla facilisi. Praesent vel suscipit mauris. Mauris
              interdum orci a ex rutrum, ac bibendum purus luctus. Ut non
              vestibulum elit, sed aliquet justo.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
  // #endregion
}

export { Detail };
