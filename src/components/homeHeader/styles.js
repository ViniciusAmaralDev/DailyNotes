import styled from "styled-components/native";

export const Container = styled.View.attrs({})`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px;
  background-color: ${(props) => props.theme.primaryBackgroundColor};
`;

export const HStack = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  width: 30px;
  justify-content: center;
  align-items: center;
  margin-left: 16px;
`;

export const BackButton = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  width: 20px;
  padding: 8px 0px;
`;

export const Text = styled.Text`
  font-family: "JanoSansProBold";
  font-size: 22px;
  margin-top: -5px;
  color: ${(props) => props.theme.primaryTextColor};
`;
