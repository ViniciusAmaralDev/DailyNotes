import React, { useContext } from "react";
import { StatusBar } from "react-native";
import { Container } from "./styles";
import Context from "../../context";

import Header from "../../components/homeHeader";
import NoteListCard from "../../components/noteListCard";

export default function Home() {
  const { theme } = useContext(Context);

  return (
    <>
      <StatusBar
        barStyle={theme.barStyle}
        backgroundColor={theme.primaryBackgroundColor}
      />
      <Header />
      <Container>
        <NoteListCard />
      </Container>
    </>
  );
}
