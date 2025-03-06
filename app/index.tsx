import { Text, View, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <Searchbar
          style={styles.searchBar}
          placeholder='Search'
          value={''}
          mode='view'
          onChangeText={() => {}}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    flex: 1,
  },
  searchBar: {},
});
