import styled from "styled-components/native";

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  padding: 16px;
  background-color: ${(props) =>
    props.selected ? `${props.theme.primaryButtonColor}40` : "#0000"};
`;

export const HStack = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

export const Title = styled.Text`
  font-family: ${props => props.selected ? "JanoSansProBold" : "JanoSansProRegular"};
  font-size: 16px;
  color: ${(props) =>
    props.selected
      ? props.theme.primaryButtonColor
      : props.theme.primaryTextColor};
`;

export const Description = styled.Text`
  font-family: ${props => props.selected ? "JanoSansProMedium" : "JanoSansProRegular"};
  font-size: 14px;
  color: ${(props) =>
    props.selected
      ? `${props.theme.primaryTextColor}70`
      : props.theme.secondaryTextColor};
`;

export const Hours = styled.Text`
  font-family: "Jano Sans Pro Light";
  font-size: 12px;
  margin-right: 8px;
  color: ${(props) =>
    props.selected
      ? props.theme.primaryTextColor
      : props.theme.secondaryTextColor};
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})``;
