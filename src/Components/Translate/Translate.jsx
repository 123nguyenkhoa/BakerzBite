import React, { useEffect } from "react";
import "./Translate.css";
import earth from "../Assets/earth-icon.jpg";

const Translate = () => {
  useEffect(() => {
    const addScript = document.createElement("script");
    addScript.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    addScript.async = true;
    document.body.appendChild(addScript);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages:
            "ar,bn,cs,da,de,en,es,et,fi,fr,gu,he,hi,hr,hu,id,it,jv,kn,ko,lt,lv,mr,ms,mt,my,ne,nl,no,pl,pt,ro,ru,si,sk,sl,sq,sr,sv,sw,ta,te,tr,uk,ur,vi,zu",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    return () => {
      document.body.removeChild(addScript);
    };
  }, []);

  const toggleTranslateElement = () => {
    const translateElement = document.getElementById(
      "google_translate_element"
    );
    if (translateElement) {
      translateElement.style.display =
        translateElement.style.display === "none" ? "block" : "none";
    }
  };

  return (
    <div>
      <div id="earth-icon" onClick={toggleTranslateElement}>
        <img src={earth} alt="Earth Icon" />
      </div>
      <div id="google_translate_element" style={{ display: "none" }}></div>
    </div>
  );
};

export default Translate;
