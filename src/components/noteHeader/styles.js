import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  background-color: ${(props) => props.theme.secondaryBackgroundColor};
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
`;

export const Title = styled.Text`
  font-family: "JanoSansProSemiBold";
  font-size: 22px;
  color: ${(props) => props.theme.primaryTextColor};
`;

export const Text = styled.Text`
  font-family: "JanoSansProRegular";
  font-size: 16px;
  color: ${(props) => props.theme.primaryTextColor};
`;
