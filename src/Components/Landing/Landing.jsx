import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Landing.module.css";
import land_logo from "../Assets/landing.png";

const Landing = () => {
  useEffect(() => {
  
    document.body.classList.add(styles.landingPageBody);

    const script = document.createElement("script");
    script.src = "https://unpkg.com/scrollreveal";
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      const scrollRevealOption = {
        distance: "50px",
        origin: "bottom",
        duration: 1000,
      };

      if (window.ScrollReveal) {
        window.ScrollReveal().reveal(`.${styles.landingLetterZ}`, {
          duration: 1000,
          delay: 1000,
        });
        window.ScrollReveal().reveal(`.${styles.landingContent} img`, {
          duration: 1000,
          delay: 1500,
        });
        window.ScrollReveal().reveal(`.${styles.landingTextLeft}`, {
          ...scrollRevealOption,
          origin: "right",
          delay: 2000,
        });
        window.ScrollReveal().reveal(`.${styles.landingTextRight}`, {
          ...scrollRevealOption,
          origin: "left",
          delay: 2000,
        });
        window.ScrollReveal().reveal(`.${styles.landingExplore}`, {
          duration: 1000,
          delay: 2500,
        });
        window.ScrollReveal().reveal(`.${styles.landingContent} h5`, {
          duration: 1000,
          interval: 500,
          delay: 3000,
        });
        window.ScrollReveal().reveal(`.${styles.landingCatalog}`, {
          duration: 1000,
          delay: 5000,
        });
        window.ScrollReveal().reveal(`.${styles.landingPrint}`, {
          duration: 1000,
          delay: 5500,
        });
        window.ScrollReveal().reveal(`.${styles.landingFooter} p`, {
          duration: 1000,
          delay: 7000,
        });
      }
    };

    return () => {
      document.body.classList.remove(styles.landingPageBody);
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className={styles.landingContainer}>
      <div className={styles.landingContent}>
        <nav className={styles.landingNav}>
          <ul className={`${styles.landingNavLinks} ${styles.navLeft}`}>
            <li>
              <Link to="/home" className={styles.noBorderLink}>
                Visit Our Website
              </Link>
            </li>
          </ul>
        </nav>
        <span className={styles.landingLetterZ}>Z</span>
        <img src={land_logo} alt="header" />
        <h4 className={styles.landingTextLeft}>BAKER</h4>
        <h4 className={styles.landingTextRight}>BITE</h4>
        <button className={`${styles.landingBtn} ${styles.landingPrint}`}>
          PRINT
        </button>
        <button className={`${styles.landingBtn} ${styles.landingCatalog}`}>
          CATALOG
        </button>
        <h5 className={styles.landingFeatures1}>Delicious</h5>
        <h5 className={styles.landingFeatures2}>Creative</h5>
        <h5 className={styles.landingFeatures3}>Exquisite</h5>
        <h5 className={styles.landingFeatures4}>Cozy</h5>
        <footer className={styles.landingFooter} id="foot-id">
          <p className={styles.landingFooterLanding}>
            Copyright © 2024 Bakerz Bite. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Landing;
