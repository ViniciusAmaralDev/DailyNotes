import React from "react";
import { Container, Text } from "./styles";
import { getCustomDate } from "../../utils/Date";

export default function NoteInformation({ created_at, updated_at }) {
  return (
    <Container>
      <Text>Criado em: {getCustomDate(created_at)}</Text>
      <Text>Última atualização: {getCustomDate(updated_at)}</Text>
    </Container>
  );
}
