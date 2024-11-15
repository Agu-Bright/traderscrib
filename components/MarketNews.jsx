"use client";
import { useEffect } from "react";

const MarketNews = () => {
  useEffect(() => {
    // Check if the script for the TradingView news widget is already added
    if (!document.getElementById("tradingview-widget-script2")) {
      const script = document.createElement("script");
      script.id = "tradingview-widget-script2";
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-market-news.js"; // Use the news widget script
      script.async = true;
      script.innerHTML = JSON.stringify({
        colorTheme: "dark", // Set the color theme
        isTransparent: true, // Make the background transparent
        width: "100%", // Set widget width
        height: "100%", // Set widget height
        locale: "en", // Set locale to English
      });

      // Debug: Check if the container exists before appending the script
      const container = document.getElementById(
        "tradingview-widget-container2"
      );
      if (container) {
        console.log("Appending TradingView widget script to container2");
        container.appendChild(script);
      } else {
        console.error("Container not found: tradingview-widget-container2");
      }
    }

    return () => {
      // Clean up the widget when unmounting the component
      const widgetContainer = document.getElementById(
        "tradingview-widget-container2"
      );
      if (widgetContainer) {
        widgetContainer.innerHTML = "";
      }
    };
  }, []);

  return (
    <div
      className="tradingview-widget-container2"
      id="tradingview-widget-container2"
      style={{ height: "100%", width: "100%" }} // Make sure height and width are set
    >
      <div
        className="tradingview-widget-container__widget"
        style={{ height: "100%" }}
      ></div>
    </div>
  );
};

export default MarketNews;
