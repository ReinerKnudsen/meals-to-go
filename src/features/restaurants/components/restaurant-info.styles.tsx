import styled from 'styled-components';
import { Card } from 'react-native-paper';

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space.xs};
  padding-bottom: ${(props) => props.theme.space.xs};
`;

export const RatingSection = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const OpenIndicator = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space.xs};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space.xs};
`;

export const Icon = styled.Image`
  width: ${({ theme }) => theme.sizes.default};
  height: ${({ theme }) => theme.sizes.default};
`;
