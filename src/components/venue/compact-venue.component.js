import React from "react";
import WebView from "react-native-webview";
import { Platform } from "react-native";
import styled from "styled-components/native";
import { Text } from "react-native";

//Use WebView, which works on android os, to display an image, instead of <Image />
const CompactWebView = styled(WebView)`
  border-radius: 10px;
  height: 100px;
  width: 120px;
`;

const CompactImage = styled.Image`
  border-radius: 10px;
  height: 100px;
  width: 120px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const isAndroid = Platform.OS === "android";

export const CompactVenueCard = ({ venue }) => {
  const Image = isAndroid ? CompactWebView : CompactImage;
  return (
    <Item>
      <Image source={{ uri: venue.photos[0] }} />
      <Text>{venue.name}</Text>
    </Item>
  );
};
