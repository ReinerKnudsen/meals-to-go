import { Text, View, StyleSheet } from 'react-native';

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
    <View>
      <Card elevation={5} style={styles.card}>
        <Card.Cover
          key={name}
          source={{
            uri: photos[0],
          }}
          style={styles.cover}
        />
        <Card.Content>
          <Text style={styles.title}>{name}</Text>
          <Text>{address}</Text>
        </Card.Content>
      </Card>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'white',
  },
  cover: {
    padding: 5,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 5,
  },
});
