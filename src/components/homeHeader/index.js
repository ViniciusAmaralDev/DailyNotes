import React, { useContext } from "react";
import { Container, HStack, Button, Text } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import Context from "../../context";
import { useNavigation } from "@react-navigation/native";

export default function HomeHeader() {
  const { theme } = useContext(Context);

  const navigation = useNavigation();
  const navigateToNoteScreen = () =>
    navigation.navigate("NoteScreen", { idNote: null });

  const buttonColor = theme.primaryTextColor;
  const CustomButtonIcon = ({ name, size = 20 }) => (
    <MaterialIcons name={name} size={size} color={buttonColor} />
  );

  return (
    <Container>
      <Text>Daily Notes</Text>

      <Button onPress={navigateToNoteScreen}>
        <CustomButtonIcon name="add" size={30} />
      </Button>
    </Container>
  );
}
