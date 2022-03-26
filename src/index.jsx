import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import Context from "./context";
import Navigation from "./navigation";
import { useFonts } from "expo-font";

export default () => {
  const { theme } = useContext(Context);
  const [loaded] = useFonts({
    JanoSansProLight: require("./assets/fonts/JanoSansProLight.otf"),
    JanoSansProRegular: require("./assets/fonts/JanoSansProRegular.otf"),
    JanoSansProMedium: require("./assets/fonts/JanoSansProMedium.otf"),
    JanoSansProSemiBold: require("./assets/fonts/JanoSansProSemiBold.otf"),
    JanoSansProBold: require("./assets/fonts/JanoSansProBold.otf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  );
};
