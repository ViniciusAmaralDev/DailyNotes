import React, { useContext } from "react";
import { StatusBar } from "react-native";
import Context from "../../context";

export default function CustomStatusBar({ ...args }) {
  const { theme } = useContext(Context);

  return (
    <StatusBar
      barStyle={theme.barStyle}
      backgroundColor={
        args.secondary
          ? theme.secondaryBackgroundColor
          : theme.primaryBackgroundColor
      }
    />
  );
}
