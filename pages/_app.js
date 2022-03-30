import { GetServerSidePropsContext } from "next";
import { useState } from "react";
import { AppProps } from "next/app";
import { getCookie, setCookies } from "cookies-next";
import Head from "next/head";
import { MantineProvider, ColorScheme, ColorSchemeProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import "./../App.css";
import { AuthProvider } from "../contexts/AuthContext";

export default function App(props) {
  const { Component, pageProps, settings } = props;
  const [colorScheme, setColorScheme] = useState(props.colorScheme);

  const toggleColorScheme = (value) => {
    const nextColorScheme = value || (colorScheme === "dark" ? "light" : "dark");
    setColorScheme(nextColorScheme);
    setCookies("mantine-color-scheme", nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
  };

  const getLayout = Component.getLayout || ((page) => page);

  const theme = {
    colorScheme,
    breakpoints: {
      xs: 500,
      sm: 800,
      md: 1000,
      lg: 1200,
      xl: 1400,
    },
    colors: {
      // Add your color
      "deep-blue": ["#E9EDFC", "#C1CCF6", "#99ABF0" /* ... */],
    },
    shadows: {
      md: "1px 1px 3px rgba(0,0,0,.25)",
      xl: "5px 5px 3px rgba(0,0,0,.25)",
    },
  };

  return (
    <>
      <Head>
        <title>Mantine next example</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>

      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <AuthProvider>
          <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
            <NotificationsProvider>{getLayout(<Component {...pageProps} />)}</NotificationsProvider>
          </MantineProvider>
        </AuthProvider>
      </ColorSchemeProvider>
    </>
  );
}

App.getInitialProps = ({ ctx }) => ({
  colorScheme: getCookie("mantine-color-scheme", ctx) || "light",
});
