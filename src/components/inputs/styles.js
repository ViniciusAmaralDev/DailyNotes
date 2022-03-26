import styled from "styled-components/native";

export const ScrollView = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const Input = styled.TextInput.attrs({
  textAlign: "left",
  textAlignVertical: "bottom",
  multiline: true,
})`
  font-size: ${props => props.size || 18}px;
  font-family: "JanoSansProRegular";
  color: ${(props) =>
    props.secondary
      ? props.theme.secondaryTextColor
      : props.theme.primaryTextColor};
`;

export const Text = styled.Text`
  font-family: "JanoSansProRegular";
  font-size: 14px;
  color: ${(props) => props.theme.terciaryButtonColor};
`;
