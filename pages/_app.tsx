import "../styles/globals.css";
import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import { useEffect, useMemo, useState } from "react";
import { AppContext } from "../components/hooks/AppContext.hook";

function MyApp({ Component, pageProps }: AppProps) {
  const [display, setDisplay] = useState({
    modal: false,
    navMenu: false,
  });

  const displayValue = useMemo(
    () => ({ display, setDisplay }),
    [display, setDisplay]
  );

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("/sw.ts").then(
          function (registration) {
            console.log(
              "Service Worker registration successful with scope: ",
              registration.scope
            );
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
  }, []);

  return (
    <AppContext.Provider value={displayValue}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
