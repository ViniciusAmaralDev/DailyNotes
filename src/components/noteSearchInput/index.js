import React, { useContext } from "react";
import Context from "../../context";
import { Container, SearchContainer, Input } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

export default function NoteSearchInput({ search }) {
  const { theme } = useContext(Context);

  return (
    <Container>
      <SearchContainer>
        <Input
          placeholder="pesquisar por alguma nota"
          placeholderTextColor={theme.secondaryTextColor}
          onChangeText={(text) => search(text)}
        />
        <MaterialIcons name="search" size={20} color={theme.primaryTextColor} />
      </SearchContainer>
    </Container>
  );
}
