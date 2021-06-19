import styled from "styled-components/native";
import { View } from "react-native";
import { Searchbar as SearchbarComponent } from "react-native-paper";

export const SearchBarContainer = styled(View)`
  align-self: stretch;
  align-items: center;
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg["secondary"]};
`;

export const Searchbar = styled(SearchbarComponent)`
  width: ${(props) => props.theme.sizes[6]};
  border-radius: ${(props) => props.theme.radius.md};
`;
