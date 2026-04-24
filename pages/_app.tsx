import "../styles/globals.css";
import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import { useEffect, useMemo, useState } from "react";
import { AppContext } from "../components/hooks/AppContext.hook";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [display, setDisplay] = useState({
    modal: false,
    navMenu: false,
  });

  const displayValue = useMemo(
    () => ({ display, setDisplay }),
    [display]
  );

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker.register("/sw.ts").catch(console.error);
      });
    }
  }, []);

  return (
    <AppContext.Provider value={displayValue}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}