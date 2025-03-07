import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { RestaurantsScreen } from '../src/features/restaurants/screens/restaurants.screen';
import styled from 'styled-components';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

export default function Index() {
  return (
    <SafeArea>
      <RestaurantsScreen />
    </SafeArea>
  );
}
