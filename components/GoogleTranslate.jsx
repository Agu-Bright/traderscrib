// components/GoogleTranslateDropdown.js
"use client";
import { useEffect, useState } from "react";

const GoogleTranslateDropdown = ({ translate }) => {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.defer = true;
    document.body.appendChild(script);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
      setIsInitialized(true);
    };

    script.onload = () => setIsScriptLoaded(true);
  }, []);

  const handleTranslate = () => {
    if (isScriptLoaded && !isInitialized) {
      window.googleTranslateElementInit();
    }
  };

  return (
    <div style={{ visibility: `${translate ? "visible" : "hidden"}` }}>
      <button style={{ display: "none" }} onClick={handleTranslate}>
        Translate
      </button>
      <div
        id="google_translate_element"
        style={{
          display: isInitialized ? "block" : "none",
        }}
      ></div>
    </div>
  );
};

export default GoogleTranslateDropdown;
