import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

const StyledView = styled(View)`
  width: 256px;
  border-bottom-color: #2cb868;
  border-bottom-width: 4px;
  margin: 8px 0;
`;

export const Divider = () => <StyledView />;
