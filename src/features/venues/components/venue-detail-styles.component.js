import { View, Text } from 'react-native';
import styled from 'styled-components/native';

export const AccordionList = styled(List.Accordion).attrs({
  titleStyle: {
    color: colors.text.primary,
    fontFamily: fonts.heading,
  },
})`
  background-color: ${(props) => props.theme.colors.bg.secondary};
  color: ${(props) => props.theme.colors.text.primary};
  width: 100%;
  padding: ${(props) => props.theme.space[2]} ${(props) => props.theme.space[0]};
`;

export const DescriptionContainer = styled(View)`
  background-color: ${(props) => props.theme.colors.bg.secondary};
  height: ${(props) => props.theme.sizes[4]};
  width: ${(props) => props.theme.sizes[6]};
  padding-right: ${(props) => props.theme.space[4]};
  align-items: center;
`;

export const Description = styled(Text)`
  color: ${(props) => props.theme.colors.text.muted};
`;

export const ListItem = styled(List.Item).attrs({
  titleStyle: {
    color: colors.text.primary,
    fontFamily: fonts.body,
  },
  descriptionStyle: {
    color: colors.text.muted,
    fontSize: fontSizes.caption,
  },
})`
  background-color: ${(props) => props.theme.colors.bg.secondary};
  color: ${(props) => props.theme.colors.text.primary};
`;

export const ListIcon = styled(List.Icon).attrs({
  color: colors.ui.primary,
})``;
