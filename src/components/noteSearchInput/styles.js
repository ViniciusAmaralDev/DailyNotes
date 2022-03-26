import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 60px;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

export const SearchContainer = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  padding: 0px 16px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.secondaryBackgroundColor};
`;

export const Input = styled.TextInput`
  flex: 9;
  height: 100%;
  font-family: "JanoSansProRegular";
  font-size: 16px;
  color: ${(props) => props.theme.secondaryTextColor};
`;
