// components/GoogleTranslateDropdown.js
"use client";
import { IconButton } from "@node_modules/@mui/material";
import { useEffect, useState } from "react";
import GTranslateIcon from "@mui/icons-material/GTranslate";
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
    // <div
    //   style={{
    //     visibility: `${translate ? "visible" : "hidden"}`,
    //     border: "1px solid white",
    //     height: "100%",
    //     display: "flex",
    //     alignItems: "center",
    //     justifyContent: "center",
    //   }}
    // >
    //   <div>
    //     <button
    //       style={{
    //         display: "none",
    //         color: "white",
    //         height: "100%",
    //         width: "100%",
    //         background: "white",
    //       }}
    //       onClick={handleTranslate}
    //     >
    //       Translate
    //     </button>
    //     {/* <div
    //       id="google_translate_element"
    //       style={{
    //         display: isInitialized ? "block" : "none",
    //       }}
    //     ></div> */}
    //   </div>
    // </div>

    <>
      <IconButton onClick={handleTranslate}>
        <GTranslateIcon sx={{ color: "white" }} />
      </IconButton>

      <div
        id="google_translate_element"
        style={{
          display: isInitialized ? "block" : "none",
        }}
      ></div>
    </>
  );
};

export default GoogleTranslateDropdown;
