import React, { useContext } from "react";
import { Container, HStack, Title, Description } from "./styles";
import Context from "../../../context";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../../../interfaces";

interface NoteProps {
  note: {
    id: number;
    title: string;
    description: string;
    favorite: boolean;
    selected: boolean;
  };
}

export default function NoteScreen({ note }: NoteProps) {
  const { id, title, description, selected } = note;
  const { dispatch } = useContext(Context);

  const navigation = useNavigation<NavigationProps>();
  const navigateToNoteScreen = () =>
    navigation.navigate("NoteScreen", { idNote: note.id });

  const formattedTitle =
    title.length > 30 ? title.slice(0, 30).concat("...") : title;

  const formattedDescription =
    description.length > 45
      ? description.slice(0, 45).concat("...")
      : description;

  const handleSelectedNote = () =>
    dispatch({ type: "handleSelectedNote", payload: id });

  return (
    <Container
      selected={selected}
      onPress={navigateToNoteScreen}
      onLongPress={handleSelectedNote}
    >
      <Title selected={selected}>{formattedTitle}</Title>
      <Description selected={selected}>{formattedDescription}</Description>
    </Container>
  );
}
