import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 0px 16px;
  padding-top: 8px;
  padding-bottom: 16px;
  background-color: ${(props) => props.theme.primaryBackgroundColor};
`;

export const Button = styled.TouchableOpacity`
  width: 50px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${(props) => props.color};
`;
