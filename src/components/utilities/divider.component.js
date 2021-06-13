import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

const StyledView = styled(View)`
  width: 256px;
  border-bottom-color: ${(props) => props.theme.colors.ui.primary};
  border-bottom-width: 2px;
  margin: 4px 0;
`;

export const Divider = () => <StyledView />;
