import { View, Text, FlatList } from "react-native";
import styled from "styled-components/native";
import { Searchbar as SearchbarComponent, Card } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

export const SearchBarContainer = styled(View)`
  padding: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const Searchbar = styled(SearchbarComponent)`
  width: ${(props) => props.theme.sizes[6]};
  border-radius: ${(props) => props.theme.radius.md};
`;

export const VenueCardContainer = styled(Card)`
  width: ${(props) => props.theme.sizes[6]};
  background-color: ${(props) => props.theme.colors.bg["listItem"]};
  border-radius: ${(props) => props.theme.radius.md};

  padding-bottom: ${(props) => props.theme.space[3]};
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
  font-family: ${(props) => props.theme.fonts.body};
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
