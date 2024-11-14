// components/TradingViewWidget.js
import { useEffect } from "react";

const TradingViewWidget = () => {
  useEffect(() => {
    // Check if the script is already added
    if (!document.getElementById("tradingview-widget-script")) {
      const script = document.createElement("script");
      script.id = "tradingview-widget-script";
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-events.js";
      script.async = true;
      script.innerHTML = JSON.stringify({
        colorTheme: "dark",
        isTransparent: true,
        width: "100%",
        height: "100%",
        locale: "en",
      });
      document
        .getElementById("tradingview-widget-container")
        .appendChild(script);
    }
    return () => {
      // Remove the widget if necessary when unmounting
      const widgetContainer = document.getElementById(
        "tradingview-widget-container"
      );
      if (widgetContainer) {
        widgetContainer.innerHTML = "";
      }
    };
  }, []);

  return (
    <div
      className="tradingview-widget-container"
      id="tradingview-widget-container"
      style={{ height: "100%" }}
    >
      <div
        className="tradingview-widget-container__widget"
        style={{ height: "100%" }}
      ></div>
    </div>
  );
};

export default TradingViewWidget;
