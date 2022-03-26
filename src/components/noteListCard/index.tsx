import React, { useContext, useEffect, useState } from "react";
import {
  Container,
  AnimationContainer,
  NoteList,
  HorizontalLine,
  ButtonsContainer,
  Button,
  DeleteButton,
  Text,
} from "./styles";
import Context from "../../context";

import Lottie from "lottie-react-native";
import iconEmpty from "../../assets/animations/empty.json";

import CardNote from "./note";
import { MaterialIcons } from "@expo/vector-icons";

import NoteSearchInput from "../noteSearchInput";
import { Note } from "../../interfaces";

interface NoteProps {
  item: {
    id: number;
    title: string;
    description: string;
    favorite: boolean;
    selected: boolean;
  };
}

export default function NoteListCard() {
  const { state, dispatch, theme } = useContext(Context);

  const [allNotesAreSelecteds, setAllNotesAreSelecteds] = useState(false);
  const [optionToSelectAll, setOptionToSelectAll] = useState(false);
  const handleSelectAll = () =>
    dispatch({
      type: allNotesAreSelecteds ? "deselectAllNotes" : "selectAllNotes",
    });

  const deleteSelectedNotes = () => dispatch({ type: "deleteSelectedNotes" });

  const [notesFetched, setNotesFetched] = useState<Note[]>([]);
  const searchNote = (text: string) => {
    const result = state.notes.filter(
      (note) => note.title.includes(text) || note.description.includes(text)
    );
    setNotesFetched(result);
  };

  const buttonIconColor = theme.primaryTextColor;

  const buttonNameSelectAll = allNotesAreSelecteds
    ? "desmarcar todas"
    : "marcar todas";
  const buttonIconNameSelectAll = allNotesAreSelecteds
    ? "check-box"
    : "check-box-outline-blank";

  const CustomSelectAllButton = () => (
    <Button onPress={handleSelectAll}>
      <MaterialIcons
        name={buttonIconNameSelectAll}
        size={20}
        color={buttonIconColor}
        style={{ marginTop: 5 }}
      />
      <Text>{buttonNameSelectAll}</Text>
    </Button>
  );

  const CustomDeleteButton = () => (
    <DeleteButton onPress={deleteSelectedNotes}>
      <MaterialIcons
        name="delete-outline"
        size={25}
        color={theme.primaryTextColor}
      />
    </DeleteButton>
  );

  const CustomButtonsContainer = () => (
    <ButtonsContainer>
      <CustomSelectAllButton />
      <CustomDeleteButton />
    </ButtonsContainer>
  );

  useEffect(() => {
    const selectedNotes = state.notes.filter((note) => note.selected);
    const numberOfNotesSelected = selectedNotes.length;
    const numberOfNotes = state.notes.length;

    if (numberOfNotesSelected === numberOfNotes) setAllNotesAreSelecteds(true);
    else setAllNotesAreSelecteds(false);

    if (numberOfNotesSelected > 0) setOptionToSelectAll(true);
    else setOptionToSelectAll(false);
  }, [state]);

  return (
    <Container>
      <NoteSearchInput search={searchNote} />
      <NoteList
        data={notesFetched.length > 0 ? notesFetched : state.notes}
        keyExtractor={(item: Note) => item.id}
        renderItem={({ item }: NoteProps) => <CardNote note={item} />}
        ItemSeparatorComponent={() => <HorizontalLine />}
        ListEmptyComponent={() => (
          <AnimationContainer>
            <Lottie source={iconEmpty} autoPlay autoSize loop />
          </AnimationContainer>
        )}
      />

      {optionToSelectAll && <CustomButtonsContainer />}
    </Container>
  );
}
