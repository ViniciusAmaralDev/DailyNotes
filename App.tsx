import React from "react";
import { ContextProvider } from "./src/context";
import Main from "./src";

export default () => (
  <ContextProvider>
    <Main />
  </ContextProvider>
);
