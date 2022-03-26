import styled from "styled-components/native";

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  flex: 1;
  padding: 8px 16px;
  background-color: ${(props) => props.theme.primaryBackgroundColor};
`;

export const Scroll = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})``;
