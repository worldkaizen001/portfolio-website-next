import "../styles/globals.css";
import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import { useMemo, useState } from "react";
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

  return (
    <AppContext.Provider value={displayValue}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
