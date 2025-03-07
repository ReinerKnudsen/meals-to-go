import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { RestaurantsScreen } from '../src/features/restaurants/screens/restaurants.screen';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components/';
import { theme } from '../src/infrastructure/theme';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

export default function Index() {
  return (
    <ThemeProvider theme={theme}>
      <SafeArea>
        <RestaurantsScreen />
      </SafeArea>
    </ThemeProvider>
  );
}
