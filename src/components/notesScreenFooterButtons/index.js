import React, { useContext } from "react";
import { Container, Button } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import Context from "../../context";

export default function NotesScreenFooterButtons({
  idNote,
  favorite,
  readMode,
  deleteNote,
  share
}) {
  const { dispatch, theme } = useContext(Context);

  const favoriteIconColor = favorite
    ? theme.terciaryTextColor
    : theme.primaryTextColor;

  const handleFavoriteNote = () =>
    dispatch({ type: "handleFavoriteNote", payload: idNote });

  return (
    <Container>
      <Button
        color={theme.terciaryBackgroundColor}
        onPress={handleFavoriteNote}
      >
        <MaterialIcons name="star" size={25} color={favoriteIconColor} />
      </Button>

      <Button color={theme.terciaryButtonColor} onPress={() => {}}>
        <MaterialIcons
          name={"picture-as-pdf"}
          size={25}
          color={theme.primaryTextColor}
        />
      </Button>

      <Button color={theme.primaryButtonColor} onPress={share}>
        <MaterialIcons
          name={"share"}
          size={25}
          color={theme.primaryTextColor}
        />
      </Button>

      <Button color={theme.terciaryButtonColor} onPress={deleteNote}>
        <MaterialIcons
          name={"delete-outline"}
          size={25}
          color={theme.primaryTextColor}
        />
      </Button>

      <Button color={theme.secondaryButtonColor} onPress={readMode}>
        <MaterialIcons
          name={"menu-book"}
          size={25}
          color={theme.primaryTextColor}
        />
      </Button>
    </Container>
  );
}
