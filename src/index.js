import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ShopContextProvider from "./Context/ShopContext";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary"; // Import ErrorBoundary

// Global error handler
window.onerror = function (message, source, lineno, colno, error) {
  if (message === "Script error.") {
    return true; // Prevent the default handling
  }
  console.error("Global error handler:", {
    message,
    source,
    lineno,
    colno,
    error,
  });
  return true; // Prevent the default handling
};

window.addEventListener("unhandledrejection", (event) => {
  console.error(
    "Unhandled promise rejection:",
    event.promise,
    "reason:",
    event.reason
  );
  // Prevent the default handling
  event.preventDefault();
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ErrorBoundary>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </ErrorBoundary>
);
