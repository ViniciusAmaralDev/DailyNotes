import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  margin-top: 8px;
`;

export const Text = styled.Text`
  font-family: "JanoSansProSemiBold";
  font-size: 12px;
  color: ${(props) => props.theme.secondaryTextColor};
`;
