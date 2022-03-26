import React, { useContext, useEffect } from "react";
import { Keyboard } from "react-native";
import { Container, Scroll } from "./styles";
import { TextInput } from "../../components/inputs";
import Context from "../../context";
import { Navigation } from "../../interfaces";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import StatusBar from "../../components/statusBar";
import Header from "../../components/noteHeader";

type FormData = {
  title: string;
  description: string;
};

const schema = yup.object({
  title: yup.string().required("Você precisa inserir um título"),
  description: yup.string().required("Você precisa inserir uma descrição"),
});

export default function NoteScreen({ route, navigation }: Navigation) {
  const { state, theme, dispatch } = useContext(Context);
  const { idNote } = route.params;

  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const addNote = (data: FormData) => {
    const id = state.notes.length;
    const today = new Date().getTime();

    dispatch({
      type: "addNote",
      payload: {
        id,
        ...data,
        favorite: false,
        selected: false,
        created_at: today,
        updated_at: today,
      },
    });

    navigateToHomeScreen();
  };

  const editNote = (data: FormData) => {
    dispatch({ type: "editNote", payload: { id: idNote, ...data } });
    navigateToHomeScreen();
  };

  const navigateToHomeScreen = () => navigation.navigate("HomeScreen");

  useEffect(() => {
    if (idNote !== null) {
      const updatedNote = state.notes.filter((note) => note.id === idNote);
      setValue("title", updatedNote[0].title);
      setValue("description", updatedNote[0].description);
    }
  }, [state]);

  return (
    <>
      <StatusBar secondary />

      <Header
        title={idNote === null ? "Nova Nota" : "Editar Nota"}
        save={handleSubmit(idNote === null ? addNote : editNote)}
      />

      <Container onPress={Keyboard.dismiss}>
        <TextInput
          name="title"
          control={control}
          size={20}
          placeholder="Escreva aqui o título"
          placeholderTextColor={theme.primaryTextColor}
          error={errors.title}
        />

        <Scroll>
          <TextInput
            secondary
            name="description"
            control={control}
            size={18}
            placeholder="Escreva aqui a descrição"
            placeholderTextColor={theme.secondaryTextColor}
            error={errors.description}
          />
        </Scroll>
      </Container>
    </>
  );
}
