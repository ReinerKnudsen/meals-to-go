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
  elevation: 5;
  background-color: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: 5px;
  background-color: white;
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: 800;
  padding: 5px;
`;

const Address = styled.Text`
  font-size: 14px;
  padding: 5px;
  background-color: blue;
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
      <RestaurantCard>
        <RestaurantCardCover
          key={name}
          source={{
            uri: photos[0],
          }}
        />
        <Card.Content>
          <Title>{name}</Title>
          <Address>{address}</Address>
        </Card.Content>
      </RestaurantCard>
    </>
  );
};
