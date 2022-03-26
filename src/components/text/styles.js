import styled from "styled-components/native";

export const Title = styled.Text`
  font-family: ${(props) =>
    props.args.light
      ? props.theme.light
      : props.args.medium
      ? props.theme.medium
      : props.args.semiBold
      ? props.theme.semiBold
      : props.args.bold
      ? props.theme.bold
      : props.theme.regular};
  font-size: ${(props) => props.args.size || 20}px;
  color: ${(props) =>
    props.args.secondary
      ? props.theme.secondaryTextColor
      : props.args.terciary
      ? props.theme.terciaryTextColor
      : props.theme.primaryTextColor};
  margin: ${(props) => props.args.margin || `${0}px`};
  padding: ${(props) => props.args.padding || `${0}px`};
  text-align: ${props => props.args.center ? 'center' : props.args.right ? 'right' : 'left'};
`;
