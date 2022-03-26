import React, { useContext } from "react";
import { Container, Button, Text, Title } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import Context from "../../context";
import { useNavigation } from "@react-navigation/native";

export default function NoteHeader({ title, save }) {
  const { theme } = useContext(Context);

  const navigation = useNavigation();
  const goBack = () => navigation.goBack();

  const CustomButton = ({ text, handle }) => (
    <Button onPress={handle}>
      <Text>{text}</Text>
    </Button>
  );

  return (
    <Container>
      <CustomButton text="voltar" handle={goBack} />

      <Title>{title}</Title>

      <CustomButton text="salvar" handle={save} />
    </Container>
  );
}
