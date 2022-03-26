import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

export const Container = styled.View`
  flex: 1;
  width: ${width}px;
  justify-content: center;
  align-items: center;
`;

export const AnimationContainer = styled.View`
`;

export const NoteList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  width: 100%;
`;

export const HStack = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`;

export const NoteContainer = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  max-height: 210px;
  padding: 0px 16px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.secondaryBackgroundColor};
`;

export const NoteContent = styled.View`
  margin: 4px 0px;
`;

export const HorizontalLine = styled.View`
  width: 100%;
  border-width: 0.2px;
  border-color: #fff1;
`;

export const ButtonsContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  background-color: ${(props) => props.theme.terciaryBackgroundColor};
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  flex-direction: row;
  align-items: center;
`;

export const DeleteButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.terciaryButtonColor};
`;

export const Text = styled.Text`
  font-family: "JanoSansProRegular";
  font-size: 18px;
  margin-left: 8px;
  color: ${(props) => props.theme.primaryTextColor};
`;
