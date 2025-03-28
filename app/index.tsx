import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { RestaurantsScreen } from '../src/features/restaurants/screens/restaurants.screen';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components/';
import { theme } from '../src/infrastructure/theme';

import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

export default function Index() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <SafeArea>
        <RestaurantsScreen />
      </SafeArea>
    </ThemeProvider>
  );
}
