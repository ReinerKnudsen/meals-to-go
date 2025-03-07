import styled from 'styled-components';
import { Card } from 'react-native-paper';

type RestaurantInfoProps = {
  restaurant?: {
    name: string;
    icon: string;
    photos: string[];
    address: string;
    isOpenNow: boolean;
    rating: number;
    isClosedTemporarily: boolean;
  };
};

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space.xs};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.title};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

const Address = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.caption};
  font-family: ${(props) => props.theme.fonts.body};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space.xs};
`;

export const RestaurantInfoCard = ({ restaurant = {} }: RestaurantInfoProps) => {
  const {
    name = 'My Restaurant',
    icon,
    photos = ['https://cdn.pixabay.com/photo/2021/02/08/12/40/lasagna-5994612_1280.jpg'],
    address = '123 Main St',
    isOpenNow = true,
    rating = 4.5,
    isClosedTemporarily = false,
  } = restaurant;

  return (
    <>
      <RestaurantCard elevation={5}>
        <RestaurantCardCover
          key={name}
          source={{
            uri: photos[0],
          }}
        />
        <Card.Content>
          <Info>
            <Title>{name}</Title>
            <Address>{address}</Address>
          </Info>
        </Card.Content>
      </RestaurantCard>
    </>
  );
};
