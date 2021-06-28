import { View, Text, FlatList } from "react-native";
import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

export const ScreenBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/screen_bg.jpg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
`;

export const VenueCardContainer = styled(Card)`
  width: ${(props) => props.theme.sizes[6]};
  background-color: ${(props) => props.theme.colors.bg["listItem"]};
  border-radius: ${(props) => props.theme.radius.md};
  overflow: hidden;
  elevation: 10;
`;

export const InfoContainer = styled(View)`
  padding: ${(props) => props.theme.space[2]};
`;

export const Row = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: ${(props) => props.theme.space[1]};
`;

export const Title = styled(Text)`
  color: ${(props) => props.theme.colors.text.primary};
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.title};
  margin-top: ${(props) => props.theme.space[2]};
`;

export const BodyText = styled(Text)`
  color: ${(props) => props.theme.colors.text.primary};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const IconHeart = styled(Ionicons).attrs({
  name: "heart-outline",
  size: 28,
  color: "#C4CF44",
})`
  margin-top: ${(props) => props.theme.space[2]};
`;

export const VenueList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``;

export const AvailabilityIconContainer = styled(View)`
  flex-direction: row;
  flex-direction: row;
  align-items: center;
`;

export const ListContainer = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
