import { Text, View, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from '../components/restaurant-info.card';

export const RestaurantsScreen = () => {
  return (
    <>
      <View style={styles.searchContainer}>
        <Searchbar
          style={styles.searchBar}
          placeholder='Search'
          value={''}
          mode='view'
          onChangeText={() => {}}
        />
      </View>
      <View style={styles.list}>
        <RestaurantInfoCard />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    flex: 1,
  },
  searchContainer: {
    padding: 10,
  },
  searchBar: {},
});
