import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { RestaurantsScreen } from '../src/features/restaurants/screens/restaurants.screen';

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <RestaurantsScreen />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
